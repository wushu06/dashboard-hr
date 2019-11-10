<toolbar inline-template  >


    <template>

        <v-navigation-drawer
                expand-on-hover
                permanent
        >
                <v-list >
                    <a href="/employee/{{auth()->id()}}">
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img
                               src="{{auth()->user()->avatar_path ? asset(auth()->user()->avatar_path) : asset('avatars/profile.svg')}}">
                            </v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-list-item
                            link

                    >
                        <v-list-item-content>
                            <v-list-item-title class="title">{{auth()->user()->name}}</v-list-item-title>
                            <v-list-item-subtitle>{{auth()->user()->email}}</v-list-item-subtitle>

                        </v-list-item-content>

                    </v-list-item>
                    </a>
                </v-list>



            <v-divider></v-divider>

            <v-list
                    nav
                    dense
                    style="min-height: 100vh  "
            >
                <v-list-item link>



                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <a class="navbar-brand" href="{{ url('/') }}">
                            {{ config(   'app.name', 'Home') }}
                        </a>
                    </v-list-item-title>

                </v-list-item>

                <a href="/employees/">
                    <v-list-item link >
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>All employee</v-list-item-title>
                    </v-list-item>
                </a>

                <a href="/kudos">
                    <v-list-item link >
                        <v-list-item-icon>
                            <v-icon>mdi-shield-star-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Kudos</v-list-item-title>
                    </v-list-item>
                </a>

                <a href="/departments">
                    <v-list-item link >
                        <v-list-item-icon>
                            <v-icon>mdi-office-building</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Departments</v-list-item-title>
                    </v-list-item>
                </a>

                <a href="/roles">
                    <v-list-item link >
                        <v-list-item-icon>
                            <v-icon> mdi-office-building</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Roles</v-list-item-title>
                    </v-list-item>
                </a>

                <v-list-group >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-office-building</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Holidays</v-list-item-title>
                    </template>

                    <v-list-item link style="padding-left: 20px;">
                        <v-list-item-icon>
                            <v-icon> mdi-office-building</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title><a href="/holidays">All holidays</a></v-list-item-title>
                    </v-list-item>
                    <v-list-item  style="padding-left: 20px;">
                        <v-list-item-title >
                            <v-icon>mdi-plus-circle</v-icon>
                            @can('view', auth()->user())
                                <a href="/holiday/create">Settings</a>
                            @endcan
                        </v-list-item-title>

                    </v-list-item>

                </v-list-group> <!-- holidays -->

                @guest
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon> mdi-login</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </v-list-item-title>
                    </v-list-item>
                    @if (Route::has('register'))
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon> mdi-login</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>

                            </v-list-item-title>
                        </v-list-item>
                    @endif
                @else
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon> mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                            @endguest

                        </v-list-item-title>
                    </v-list-item>

            </v-list>
        </v-navigation-drawer>


    </template>

</toolbar>

