<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Request;
use App\User;
use App\Points;
use Illuminate\Support\Facades\Input;

class RestController extends Controller {

	/**
	*
	* Recherche les utilisateurs
	* @params q=id or q=name
	*
	**/
	public function searchusers(Request $request)
	{
		if(Input::exists('q')){
			$users = User::with('role')
						->with('points')
						->where('id', Input::get('q') )
						->orWhere('name', 'like', '%' . Input::get('q') . '%')
						->get();
			return $users;
		}

	}

	/**
	 *
	 * Points user
	 *
	 */
	public function pointsusers(Request $request){
		if(Input::exists('id') && Input::get('id') !== "" && is_numeric(Input::get('id')) ){
			$points = Points::where('id', Input::get('id'))->firstOrFail();
			return $points;
		}
	}


}
