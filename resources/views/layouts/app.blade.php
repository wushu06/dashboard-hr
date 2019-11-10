@include ('layouts.head')
<body>
<div id="app">

    <v-app v-cloak>
        <main-header></main-header>

    @if(auth()->check())
            @include('layouts.notifications')
        @endif
        <v-container class="grey lighten-5">
            <v-row
                    no-gutters
                    style="flex-direction: row;flex-wrap: nowrap;"
            >
                <div>
                    @if(auth()->check())
                        @include('layouts.nav')
                    @endif
                </div>
                <div class="pl-5" style="width: 100%;">
                    <main class="py-4" style="width: 100%;">
                        @yield('content')
                    </main>
                </div>
            </v-row>
        </v-container>
    </v-app>
</div>
@include('layouts.footer')
