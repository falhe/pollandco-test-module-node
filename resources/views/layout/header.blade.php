{{-- header.blade.php --}}

<nav class="navbar navbar-top">
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