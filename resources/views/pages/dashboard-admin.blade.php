@extends('layout.default')

@section('content')
    le dashboard admin

    <div class="col-lg-12">

        <h3>Recherche de panéliste</h3>

        <div id="form-search-users">

            {{-- {!! Form::open(array('route' => 'admin.search', 'method' => 'GET' , 'class' => 'form-search-users')) !!} --}}
            {!! Form::open(['method' => 'GET' , 'class' => 'form-search-users']) !!}

            <div class="form-group">
                {!! Form::text( 'name' , $value = null, ['class' => 'form-control search', 'placeholder'=>'Tapez le Nom, prénom, email ou ID']) !!}
            </div>

            <div class="form-group">
                {!! Form::submit('Rechercher', ['class' => 'form-control btn btn-primary']) !!}
            </div>

            {!! Form::close() !!}

        </div>


        {{-- search result list --}}
        <div id="search-users-list">
            <table class="table table-striped"></table>
        </div>

    </div>

@stop