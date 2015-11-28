{{-- ADMIN DASHBOARD --}}

@extends('app')

@section('sidebar')
    @parent

    @include('admin.nav')
@stop

@yield('content')