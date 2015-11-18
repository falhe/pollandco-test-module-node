{{-- Vue pour gérer les points d'un utilisateur, ajouter, supprimer, modifier --}}

@extends('app')

@section('sidebar')
    @parent

    @include('admin.nav')
@stop

@section('content')
	<div class="col-lg-9">

		<div id="PointsHandler"></div>

	</div>

	<script type="text/javascript">var userId = '{{$user->points_id}}';</script>
@endsection