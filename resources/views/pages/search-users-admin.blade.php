@extends('layout.default')

@section('content')
    {{-- DECLARE VARIABLES --}}
    {{--*/ $currentPage = "true" /*--}}

    {{-- search-users-admin --}}

    {{-- <div class="col-lg-9 col-lg-offset-3 form-search-users-container"> --}}

        {{-- <h3>Recherche de panéliste</h3> --}}

        <div id="form-search-users">

            {{-- {!! Form::open(array('route' => 'admin.search', 'method' => 'GET' , 'class' => 'form-search-users')) !!} --}}
            {!! Form::open(['method' => 'GET' , 'class' => 'form-search-users']) !!}

            <div class="form-group">
                {!! Form::text( 'name' , $value = null, ['class' => 'form-control search', 'placeholder'=>'Tapez le Nom, prénom, email ou ID']) !!}
            </div>

            <div class="form-group col-lg-4">
                {!! Form::submit('Rechercher', ['class' => 'form-control btn btn-primary']) !!}
            </div>

            {!! Form::close() !!}

        </div>


        {{-- search result list --}}
        <div>
            <table id="search-users-list" class="list table table-hover">
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>lastname</th>
                        <th>E-mail</th>
                        <th>Genre</th>
                        <th>Date d'inscription</th>
                        <th>Rôle</th>
                    </tr>
                </thead>
            </table>
        </div>

    {{-- </div> --}}

@stop