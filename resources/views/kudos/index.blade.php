@extends('layouts.app')

@section('content')

    <kudos-list :kudos="{{json_encode($kudoz)}}"></kudos-list>

   {{-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Add kudos') }}</div>
                    <div>
                        {{$kudoz->count()}}
                        @forelse($kudoz as $kudos)

                            <div>
                                <p>From: {{$kudos->sender->name}} To: {{$kudos->receiver->name}}</p>
                                <span>{{$kudos->text}}</span>
                                <form method="POST" action="/kudos/delete/{{$kudos->id}}">
                                    {{csrf_field()}}
                                    {{method_field('delete')}}
                                    <button class="btn btn-danger" type="submit">Delete</button>
                                </form>

                            </div>

                        @empty
                            <p>No results</p>
                        @endforelse
                    </div>

                </div>
            </div>
        </div>
    </div>--}}
@endsection
