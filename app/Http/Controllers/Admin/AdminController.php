<?php namespace App\Http\Controllers\Admin;

use Auth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Registrar;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use Illuminate\Http\RedirectResponse;

class AdminController extends Controller {

	protected $redirectTo = 'admin/dashboard';
	protected $loginPath = 'admin';

	/*
	|--------------------------------------------------------------------------
	| Registration & Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles the registration of new users, as well as the
	| authentication of existing users. By default, this controller uses
	| a simple trait to add these behaviors. Why don't you explore it?
	|
	*/

	use AuthenticatesAndRegistersUsers;

	/**
	 * Create a new authentication controller instance.
	 *
	 * @param  \Illuminate\Contracts\Auth\Guard  $auth
	 * @param  \Illuminate\Contracts\Auth\Registrar  $registrar
	 * @return void
	 */
	public function __construct(Guard $auth, Registrar $registrar)
	{
		$this->auth = $auth;
		$this->middleware('admin', ['only' => 'getIndex']);
		$this->middleware('admin', ['only' => 'getProfiladmin']);
		//$this->registrar = $registrar;

		/*$this->middleware('guest', ['except' => 'getLogout']);*/
	}

	public function postLoginAdmin(Request $request)
	{

		$input = $request->all();

		$this->validate($request, [
			'name' => 'required',
			'password' => 'required',
		]);

		$user = User::where('name', $request->get('name'))->first();

		if ($user && Hash::check($request->get('password'), $user->password))
			{
				if($user->role->id == '2'){

					$attempt = Auth::attempt([
						'name' => $request->get('name'),
						'password' => $request->get('password')
					]);

					//admin/dashboard/{id}
					$urlRedirectTo = $this->redirectPath() .'/'. $user->id;

					//$this->auth->login($user, $request->has('remember'));
					return redirect()->intended($urlRedirectTo);
					//return new RedirectResponse(url('/admin/profiladmin', [$user->id]));
				}else{
					return new RedirectResponse(url('/admin'));
				}
		}

		return redirect($this->loginPath())
			->withInput($request->only('name', 'remember'))
			->with('error', Lang::get('site.loginfailed'));
	}

	//
	// Redirect to the admin dashboard when connected
	//-----------------------------------
	public function getDashboard($user_id){
		$user = User::findOrFail($user_id);
		return view('pages.dashboard-admin', compact('user'));
	}

	// public function getProfiladmin(Request $request, $user_id){
	// 	$user = User::findOrFail($user_id);
	// 	return view('admin.dashboard', compact('user'));
	// }

	public function getIndex()
	{
		return view('admin.login');;
	}

	/**
	 *
	 * /admin/rechercherusers
	 *
	 */

	public function getRechercherusers(){
		return view('admin.rechercherusers');
	}

	// public function getUser($user_id){
	//  	$user = User::with('role')
	//  					->where('id', $user_id )
	//  					->get();
	//  	return view('admin.profiluser', compact('user'));
	// }


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
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
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
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
