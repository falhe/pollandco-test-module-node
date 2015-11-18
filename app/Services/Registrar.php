<?php namespace App\Services;

use Carbon\Carbon;
use App\User;
use Illuminate\Contracts\Mail\Mailer;
use Validator;
use Illuminate\Contracts\Auth\Registrar as RegistrarContract;

class Registrar implements RegistrarContract {

	/**
	 * @var Mailer
	 */
	private $mailer;

	public function __construct(Mailer $mailer){
		$this->mailer = $mailer;
	}

	/**
	 * Get a validator for an incoming registration request.
	 *
	 * @param  array  $data
	 * @return \Illuminate\Contracts\Validation\Validator
	 */
	public function validator(array $data)
	{
		return Validator::make($data, [
			'name' => 'required|max:255|alpha_num|unique:users',
			'email' => 'required|email|max:255|unique:users',
			'password' => 'required|confirmed|min:6',
		]);
	}

	/**
	 * Create a new user instance after a valid registration.
	 *
	 * @param  array  $data
	 * @return User
	 */
	public function create(array $data)
	{

		//format the birth date
		$tz = 'Europe/Paris';
		$date = Carbon::createFromDate($data['year'], $data['month'], $data['day'], $tz)->toDateTimeString();

		// create poll and co specific ID PWHZOFZ8TN

		$token = str_random(60);
		$user = User::create([
			'name' => $data['name'],
			'email' => $data['email'],
			'confirmation_token' => $token,
			'password' => bcrypt($data['password']),
			'role_id' => $data['role_id'],
			'birthday_date' => $date,
			'gender' => $data['gender']
		]);
		$this->mailer->send(['text' => 'emails.register'], compact('token', 'user'), function($message) use ($user){
			$message->to($user->email)->subject('Confirmation de votre compte');
		});
		return $user;
	}

}
