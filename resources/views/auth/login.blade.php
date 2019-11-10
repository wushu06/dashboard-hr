@include ('layouts.head')
<body>
<div id="app" v-cloak>
    <v-app>
    <main-header></main-header>
    <v-container>

        <h1>Login </h1>
        <v-form  method="POST" action="{{ route('login') }}">
            @csrf

            <v-text-field

                    label="E-mail"
                    required
                    name="email"
                    value="{{ old('email') }}"

            ></v-text-field>
            @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            <v-text-field

                    label="password"
                    type="password"
                    required
                    name="password"

            ></v-text-field>
            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror



            <v-btn  type="submit" color="primary" form="check-login-form" >
                <button type="submit" class="btn btn-primary">
                    {{ __('Login') }}
                </button>

            </v-btn>




        </v-form>
        <div style="max-width: 650px; margin: auto">
            <p>Don't have an account? <a href="/register">Register</a></p>

            @if (Route::has('password.request'))
                <a class="btn btn-link" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
            @endif
        </div>

    </v-container>

    <main-footer></main-footer>
    </v-app>
</div>
@include('layouts.footer')
