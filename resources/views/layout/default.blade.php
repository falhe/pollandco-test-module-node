<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <link href="{{ asset('dist/css/main.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    </head>
    <body id="pollstar" class="pollstar">

        {{-- HEADER --}}
        <header>
            @include('layout.header')
        </header>

        {{-- CONTENT --}}
        <div class="central">

            {{-- SIDEBAR --}}
            <div class="sidebar-wrapper">
                @include('layout.sidebar')
            </div>

            {{-- CONTENT CENTRAL --}}
            <div class="contents content-wrapper" id="content">
                <div class="container-fluid">
                    <div class="content">
                        @yield('content')
                    </div>
                </div>
            </div>

            {{-- FOOTER --}}
            <footer>
                @include('layout.footer')
            </footer>

        </div>

        <script>
            var rootPath = '{{ url() }}';
        </script>
        <script type="text/javascript" src="{{ asset('/js/jquery-2.1.4.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('/js/bootstrap.min.js') }}"></script>

        <script src="{{ asset('js/app/build/bundle.js') }}"></script>
    </body>
</html>