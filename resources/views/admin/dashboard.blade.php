{{-- Dashboard administrateur, c'est la page d'accueil d'un admin --}}

@extends('app')

@section('sidebar')
    @parent

    @include('admin.nav')
@stop


@section('content')

    <div class="col-lg-9">
    <p>Bonjour{{ Auth::user()->name }}, tu es dans ton espace <i>admin, où tu peux gérer les panélistes et plein d'autres choses à venir ;)</i></p>
    </div>

@stop