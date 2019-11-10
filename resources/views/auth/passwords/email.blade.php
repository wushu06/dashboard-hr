@include ('layouts.head')
<body>
<div id="app" v-cloak>
    <v-app>
        <main-header></main-header>
        <v-container>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <h1>{{ __('Reset Password') }}</h1>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <v-form method="POST" action="{{ route('password.email') }}">
                        @csrf

                            <v-text-field

                                    label="E-mail address"
                                    required
                                    name="email"
                                    value="{{ old('email') }}"
                            ></v-text-field>


                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            <v-btn color="primary" form="check-register-form"  >
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                            </v-btn>


                    </v-form>
                </div>
            </div>
        </div>
    </div>
        </v-container>

        <main-footer></main-footer>
    </v-app>
</div>
@include('layouts.footer')
