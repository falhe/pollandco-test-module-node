<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');
Route::get('profil', ['uses' => 'UsersController@edit', 'as' => 'profil']);
Route::post('profil', ['uses' => 'UsersController@update']);

/**
*
* ADMIN
*
**/
Route::group(['prefix' => 'admin', 'namespace' => 'admin'], function() {

    //Route::resource('/user/{id}/points', 'PointsController');
    //Route::controller('/', 'AdminController');


    Route::group(['middleware' => 'admin'], function(){
        //Route::controller('/profiladmin/{id}', 'AdminController');
        Route::get('rechercherusers', 'AdminController@getRechercherusers');
        Route::resource('user', 'UsersController');
        Route::resource('formulaire', 'FormulaireController');
        Route::get('gererpoints/{id}', 'GererpointsController@index');
        //Route::resource('points', 'PointsController');
    });
    Route::controller('/', 'AdminController');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

/**
*
* REST
*
**/
Route::resource('api/searchusers', 'SearchuserController');
//Route::get('api/searchusers', 'RestController@searchusers');
Route::put('api/points/substraction/{id}', 'PointsController@substraction');
Route::resource('api/points', 'PointsController');

