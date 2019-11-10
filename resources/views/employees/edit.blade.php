@extends('layouts.app')

@section('content')
    @can('update', $user)
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">

                        <div class="card-header">{{ __('Add employee') }}</div>

                        <div class="card-body">
                            <form method="POST" action="/user/update/{{$user->id}}" enctype="multipart/form-data">
                                @csrf
                                {{ method_field('PATCH') }}

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $user->name }}" required autocomplete="name" autofocus>

                                        @error('name')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="avatar" class="col-md-4 col-form-label text-md-right">{{ __('Avatar') }}</label>
                                    <input type="file" name="avatar">
                                </div>
                                <img src="/storage/{{$user->avatar_path}}" alt="" width="100">

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Edit employee') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    @if (count($errors))
                        <ul class="alert alert-danger">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        </div>
    @endcan
@endsection
