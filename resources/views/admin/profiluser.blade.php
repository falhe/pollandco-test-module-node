@extends('app')

@section('sidebar')
    @parent

    @include('admin.nav')
@stop

@section('content')

	<div class="col-lg-9">

		{{-- Information de l'utilisateur --}}
		<div class="panel panel-primary col-lg-8">
			<div class="panel-heading">
				<h3 class="panel-title">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					{{$user->id}} {{$user->name}} {{$user->lastname}}
				</h3>
			</div>
			<div class="panel-body">
				<table class="table table-striped table-hover ">
					<thead>
						<tr>
							<th class="col-lg-2"><strong>id</strong></th>
							<th>{{$user->id}}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="col-lg-2"><strong>nom</strong></td>
							<td>{{$user->name}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>email</strong></td>
							<td>{{$user->email}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>inscrit le</strong></td>
							<td>{{$user->created_at}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>prénom</strong></td>
							<td>{{$user->firstname}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>nom</strong></td>
							<td>{{$user->lastname}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>date de naissance</strong></td>
							<td>{{$user->birthday_date}}</td>
						</tr>
						<tr>
							<td class="col-lg-2"><strong>rôle</strong></td>
							<td>{{$user->role->slug}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		{{-- Actions --}}
		<div class="col-lg-4">
			<a href="{{url()}}/admin/formulaire/{{$user->id}}" class="btn btprimary">Voir son formulaire</a>
			<a href="{{url()}}/admin/gererpoints/{{$user->id}}" class="btn btprimary btn-success">Lui ajouter/retirer des points</a>
		</div>

	</div>
@endsection