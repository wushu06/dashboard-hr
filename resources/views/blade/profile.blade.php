@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <p>{{$user->name}} </p>
                <p>{{$user->email}} </p>
                <a href="/user/edit/{{$user->id}}">Edit</a>
                <img src="{{asset('/storage/'.$user->avatar_path)}}" alt="" width="100">

            </div>
        </div>
    </div>
@endsection