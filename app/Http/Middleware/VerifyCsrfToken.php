<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier {

	/**
	 * Handle an incoming request.
	 * La fonction Handle a été modifié pour controler le problème de 'Tokenmismatch' sur les url REST api
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if ( ! $request->is('api/*')){
			return parent::handle($request, $next);
		}
		return $next($request);
	}

}
