<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\RedirectResponse;

class AuthenticateAdmin {

	/**
	 * The Guard implementation.
	 *
	 * @var Guard
	 */
	protected $auth;

	/**
	 * Create a new filter instance.
	 *
	 * @param  Guard  $auth
	 * @return void
	 */
	public function __construct(Guard $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		//dd($request->user());
		$user = $request->user();
		$isConnected = $this->auth->check();
		$isUnconnected = $this->auth->guest();

		if ($isConnected) {
			# code...
			//dd('connec AuthenticateAdmin is connected');
			if($user->role->name == 2){
				return $next($request);
			}
		}elseif ($isUnconnected) {
			# code...
			//dd('pas connec AuthenticateAdmin is not connected');
			return new RedirectResponse(url('/'));
		}

		//if ($toto == 'admin')
		//$user->role->id == '2'
		//if($isConnected )
		//if($user->role->id == 2)
		//{
			//dd($user->role->id);
		//	return $next($request);
			//dd($this->auth->user());
			//return new RedirectResponse(url('/admin/profilAdmin'));
			//return redirect()->guest('admin/profilsdsk');
		//}
		//return $next($request);
		//return new RedirectResponse(url('/'));
	}

}
