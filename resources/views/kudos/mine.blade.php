@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('My kudos') }}</div>
                    <div>
                        @forelse($kudoz as $kudos)

                            <div>
                                <p>From: {{$kudos->sender->name}} To: {{$kudos->receiver->name}}</p>
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
