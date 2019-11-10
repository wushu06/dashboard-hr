@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">

        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                   {{auth()->user()->name}}
                    <span>company: {{auth()->user()->company->company_name}}</span>
                    <span>company: {{auth()->user()->is_admin}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
