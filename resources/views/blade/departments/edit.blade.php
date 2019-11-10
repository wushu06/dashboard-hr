@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    {{$department->name}}
                    <div class="card-header">{{ __('Edit department') }}</div>

                    <div class="card-body">
                        <form method="POST" action="/departments/update/{{$department->id}}">
                            @csrf
                            {{ method_field('PATCH') }}
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" value="{{$department->name}}" />
                            </div>
                            <div class="form-group">
                                <label for="channel_id">Choose a supervisor:</label>
                                <select name="supervisor_id" id="channel_id" class="form-control">
                                    <option value="">Choose One...</option>

                                    @foreach ($users as $user)
                                        <option value="{{ $user->id }}" {{ $user->id == $department->supervisor_id ? 'selected' : '' }}>
                                            {{ $user->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Edit '.$department->name) }}
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
