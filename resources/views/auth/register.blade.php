@include ('layouts.head')
<body>
<div id="app" v-cloak>
    <v-app>
        <main-header></main-header>
        <v-container>
        <h1>Register </h1>


            <v-form method="POST" action="{{ route('register') }}">
                @csrf

                <v-text-field

                    label="Full name"
                    required
                    name="name"
                    value="{{ old('name') }}"
                ></v-text-field>

            @error('name')
            <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror


            <v-text-field
                    name="email"
                    label="E-mail"
                    name="email"
                    required
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
                    required autocomplete="new-password"
            ></v-text-field>
                @error('password')
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                </span>
                @enderror

            <v-text-field

                    label="confirm password"
                    type="password"
                    required
                    name="password_confirmation"
                    required autocomplete="new-password"
            ></v-text-field>

            <v-text-field
                    label="Company name"
                    required
                    name="company_name"
                    value="{{ old('company_name') }}"
            ></v-text-field>
            @error('company_name')
            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
            @enderror



            <v-btn color="primary" form="check-register-form"  >
                <button type="submit" class="btn btn-primary">
                    {{ __('Register') }}
                </button>
            </v-btn>

        </v-form>
        <div class="form-wrapper">
            <p>Already have an account? <a href="/login">login</a></p>

        </div>

        </v-container>

        <main-footer></main-footer>
    </v-app>
</div>
@include('layouts.footer')
