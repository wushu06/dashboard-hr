@extends('layouts.app')

@section('content')
    @if(auth()->user())
    <profile :authuser="{{ json_encode( auth()->user()) }}"></profile>
    @endif

@endsection