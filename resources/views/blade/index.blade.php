@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header">{{ __('All employee') }}</div>
                    @if (session('message'))
                        <div class="alert alert-danger" role="alert">
                            {{ session('message') }}
                        </div>
                    @endif
                    <div>
                        @if($users && $departments)
                            <employees-list
                                    :employees="{{ json_encode( $departments) }}"
                                     >

                            </employees-list>

                        @endif
                        @forelse($users as $user)
                            <div>
                                @if($user->avatar_path)
                                     <img src="{{$user->avatar_path}}" alt="" width="100" class="rounded">
                                @endif
                                <p>  {{$user->name}} {{$user->id}}</p>
                                    @if($user->userData)
                                        <p>{{$user->userData->address}}</p>
                                        <p>{{$user->userData->postcode}}</p>
                                        <p>{{$user->userData->tel}}</p>
                                        <p>department: {{$user->getDepartment($user->userData->department)}}</p>
                                        <p>{{$user->userData->dob}}</p>
                                        <p>{{$user->userData->holiday_allowance}}</p>
                                    @endif

                            @can('update', $user)
                                    <a class="btn btn-primary" href="/user/edit/{{$user->id}}">Edit</a>
                                @endif
                                @if(auth()->user()->is_admin)
                                    <form method="POST" action="/user/delete/{{$user->id}}">
                                        {{csrf_field()}}
                                        {{method_field('delete')}}
                                        <button class="btn btn-danger" type="submit">Delete</button>
                                    </form>
                                    @endif
                            </div>

                        @empty
                            <p>No results</p>
                        @endforelse
                    </div>
                    {{ $users->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection
