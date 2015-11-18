@extends('app')

@section('content')

	{{-- Formulaires de l'utilisateur --}}
	<h1>Liste des formulaires de {{$user->name}}</h1>

	{{-- Actions --}}
	<div class="col-lg-4">
		<a href="{{url()}}/admin/formulaire/{{$user->id}}" class="btn btprimary">Modifier</a>
	</div>
@endsection