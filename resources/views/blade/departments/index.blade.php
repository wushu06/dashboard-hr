@extends('layouts.app')

@section('content')
    <department-list></department-list>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Departments') }}</div>
                    <div>
                        count: {{$departments->count()}}
                        @forelse($departments as $department)

                            <div>
                                <p>{{$department->name}} </p>
                                <p>Supervisor: <strong>{{$department->supervisor ? $department->supervisor->name : '-'}}</strong> </p>
                                    @can('view', auth()->user())
                                        <form method="POST" action="/departments/delete/{{$department->id}}">
                                            {{csrf_field()}}
                                            {{method_field('delete')}}
                                            <button class="btn btn-danger" type="submit">Delete</button>
                                        </form>
                                    <a class="btn btn-primary" href="/departments/edit/{{$department->id}}">Edit</a>
                                    @endcan

                            </div>

                        @empty
                            <p>No results</p>
                        @endforelse
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
