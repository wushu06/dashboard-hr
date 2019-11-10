@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    @if (session('message'))
                        <div class="alert alert-success" role="alert">
                            {{ session('message') }}
                        </div>
                    @endif

                    <div class="card-header">{{ $user ?__('Edit employee') :  __('Add employee') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ $user ? '/user/update/'.$user->id : route('addEmployee') }}"  enctype="multipart/form-data">
                            @csrf
                            @if($user)
                                {{ method_field('PATCH') }}
                            @endif

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $user ? $user->name : old('name') }}" required autocomplete="name" autofocus>

                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>



                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $user ? $user->email : old('email') }}" required autocomplete="email">

                                    @error('email')
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
                            @if($user)
                                <img src="/storage/{{$user->avatar_path}}" alt="" width="100">
                            @endif


                            <div class="form-group row">
                                <label for="address" class="col-md-4 col-form-label text-md-right">{{ __('address') }}</label>

                                <div class="col-md-6">
                                    <input id="address" type="text" class="form-control @error('address') is-invalid @enderror" name="address" value="{{ $user ? $user->userData->address:  old('address') }}" autocomplete="address" autofocus>

                                    @error('address')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="tel" class="col-md-4 col-form-label text-md-right">{{ __('tel') }}</label>

                                <div class="col-md-6">
                                    <input id="tel" type="text" class="form-control @error('tel') is-invalid @enderror" name="tel" value="{{ $user ? $user->userData->tel : old('tel') }}"  autocomplete="tel" autofocus>

                                    @error('tel')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="departments" class="col-md-4 col-form-label text-md-right">{{ __('Departments') }}</label>

                                <select  class="form-control" name="department">
                                    <option value="">Choose Department.</option>

                                    @foreach ($departments as $department)
                                        <option value="{{ $department->id }}" {{ $user && $user->userData->department == $department->id ? 'selected' : '' }}>
                                            {{ $department->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group row">
                                <label for="isAdmin" class="col-md-4 col-form-label text-md-right">{{ __('Admin') }}</label>

                                <div class="col-md-6">
                                    <input id="isAdmin" type="checkbox" class="form-control @error('tel') is-invalid @enderror" name="isAdmin" value="1"  {{$user && $user->is_admin ? 'checked' : ''}}>

                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{$user ?__('Edit employee') :  __('Add employee') }}
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

@endsection
