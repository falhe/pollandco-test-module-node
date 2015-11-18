<?php namespace App\Http\Controllers;

use Auth;
use App\Points;
use App\Http\Requests;
use Illuminate\Contracts\Auth\Guard;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

use Illuminate\Http\Request;

class PointsController extends Controller {

	public function __construct(Guard $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$points = Points::all();
		return $points;
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		dd('store');
		return '$toto';
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		// $user = User::with('points')
		// 				->where('id', $id )
		// 				->first();
		$toto = Points::findOrFail($id);
		return $toto;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * A DEBUGGER POUR LA PARTIE REMOVE
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$points = Points::find($id);
		if( Input::exists('total_points') && !is_null(Input::get('total_points')) && Input::get('total_points') > 0 ){
			$pointsToAdd = Input::get('total_points');
			$points->update(['total_points'=> $pointsToAdd]);
			return $points;
		}
		return 'erreur';
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		dd('destroy');
	}

	/**
	 *
	 * Substract some points
	 *
	 */
	public function substraction($id){
		$points = Points::find($id);
		if( Input::exists('remove_points') && Input::get('remove_points') > 0){
			$pointsToSubstract = Input::get('remove_points');
			$points->update(['total_points' => $points->total_points - $pointsToSubstract ]);
			return $points;
		}
	}

}
