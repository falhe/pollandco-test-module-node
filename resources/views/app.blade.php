<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

	<!-- <link href="{{ asset('/css/app.css') }}" rel="stylesheet"> -->
	<link href="{{ asset('dist/css/main.css') }}" rel="stylesheet">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="{{ url('/') }}">Poll And Co</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="{{ url('/') }}">Home</a></li>
					@if (Auth::check() && Auth::user()->role->id == 2 )
						{{-- only for administrator --}}
						@include('admin.top-menu')
					@endif
				</ul>

				<ul class="nav navbar-nav navbar-right">
					@if (Auth::guest())
						<li><a href="{{ url('/auth/login') }}">Se connecter</a></li>
						<li><a href="{{ url('/auth/register') }}">S'inscrire</a></li>
					@else
						@if (Auth::check() && Auth::user()->role->id == 2)
							<li>
								<a>{{ Auth::user()->email }}</a>
							</li>
							<li>
								<a href="#">{{Auth::user()->role->slug}}</a>
							</li>
						@endif
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="{{ route('profil') }}">Mon profil</a></li>
								<li><a href="{{ url('/auth/logout') }}">Logout</a></li>
							</ul>
						</li>
					@endif
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		@if ( Auth::check() )
			{{-- Hello {{Auth::user()->firstname}} {{Auth::user()->lastname}} --}}
		@endif

		@include('flash')

		@section('sidebar')
            {{-- This is the master sidebar. --}}
        @show

		@yield('content')
	</div>

	@include('templates.templates')
	{{-- url en variable globale --}}
	<script>
		var time = {{ time() }},
		rootPath = '{{ url() }}';
	</script>

	<!-- Scripts -->

	<script src="{{ asset('/js/bundle.js') }}" ></script>
	<script type="text/javascript" src="{{ asset('/js/jquery-2.1.4.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('/js/bootstrap.min.js') }}"></script>



	<script type="text/javascript" src="{{ asset('/js/underscore-1.8.3-min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('/js/backbone-1.2.1-min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('/js/backbone.mediator.js') }}"></script>
	<script type="text/javascript" src="{{ asset('/js/handlebars-v3.0.3.js') }}" ></script>
	<script type="text/javascript" src="{{ asset('/js/moment-2.10.6-min.js') }}"></script>

	<script type="text/javascript" src="{{ asset('/js/app/app.backbone.js') }}" ></script>
</body>
</html>
