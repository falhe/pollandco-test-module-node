{{-- formulaire recherche un utilisateur
    /admin/rechercheusers
--}}

<div id="form-search-users">

    {{-- {!! Form::open(array('route' => 'admin.search', 'method' => 'GET' , 'class' => 'form-search-users')) !!} --}}
    {!! Form::open(['method' => 'GET' , 'class' => 'form-search-users']) !!}

    <div class="form-group">
        {!! Form::text( 'name' , $value = null, ['class' => 'form-control search', 'placeholder'=>'Nom']) !!}
    </div>

    <div class="form-group">
        {!! Form::submit('Rechercher') !!}
    </div>

    {!! Form::close() !!}

</div>