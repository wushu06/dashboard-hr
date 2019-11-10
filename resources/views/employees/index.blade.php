@extends('layouts.app')

@section('content')


    @if($users && $departments)
        <employees-list
                :employees="{{ json_encode( $departments) }}"
                 >

        </employees-list>

    @endif


@endsection
