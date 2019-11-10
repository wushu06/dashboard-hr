<template>
    <div class="header">
        <v-toolbar  class="header_nav" color="white">

            <v-toolbar-title class="logo-wrapper">
                <router-link to="/">

                      <img src='@/assets/images/d.svg'  alt="" height="45" >
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <v-toolbar-items class="hidden-xs-only">
                <v-tooltip bottom v-if="adminOnly" :key="adminOnly">
                    <template v-slot:activator="{ on }">
                        <router-link to="/admin">
                            <v-btn flat v-on="on " :class="'/admin' === $route.path ? 'highlighted' : ''"> <i class="i-nav fas fa-users-cog"></i></v-btn>
                        </router-link>
                    </template>
                    <span>Admin</span>
                </v-tooltip>

                <v-tooltip bottom v-if="auth"  v-for="(item, i) in itemsLoggedIn"
                           >
                    <template v-slot:activator="{ on }" >
                        <router-link :to=item.link>
                            <v-btn flat v-on="on " :class="item.link === $route.path ? 'highlighted' : ''"> <i :class="`i-nav ${item.icon}`"></i></v-btn>
                        </router-link>
                    </template>
                    <span>{{item.title}}</span>
                </v-tooltip>
                <v-tooltip bottom v-if="!auth"   v-for="(item, i) in itemsLoggedOut">
                    <template v-slot:activator="{ on }">
                        <router-link :to=item.link>
                            <v-btn flat v-on="on " :class="item.link === $route.path ? 'highlighted' : ''"><i :class="`i-nav ${item.icon}`"></i></v-btn>
                        </router-link>
                    </template>
                    <span>{{item.title}}</span>
                </v-tooltip>


                <v-tooltip bottom  v-if="checkToken">
                    <template v-slot:activator="{ on }">

                             <v-btn flat v-on="on" @click="logout">  <i class="i-nav fas fa-sign-out-alt"></i></v-btn>

                    </template>
                    <span>Logout</span>
                </v-tooltip>
                <!-- -/ dropdown menu /- -->
                <v-menu bottom left  v-if="auth">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                dark
                                icon
                                v-on="on"
                        >
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </template>

                    <v-list class="dropdown_menu">
                        <v-list-tile v-if="user">
                            <v-list-tile-title>
                               {{user.name +' '+user.surname}}
                            </v-list-tile-title>
                        </v-list-tile>

                        <v-list-tile
                                v-for="(item, i) in dropdown"
                                :key="i"
                                @click=""
                        >

                            <router-link :to=item.link>

                                <v-list-tile-title class="dropdown_menu_items" >
                                    <i :class="item.icon" ></i>
                                    {{ item.title }}
                                </v-list-tile-title>
                            </router-link>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <!-- -/ END dropdown menu /- -->



            </v-toolbar-items>
            <v-toolbar-side-icon color="white" class="hidden-sm-and-up"   @click.stop="drawer = !drawer"></v-toolbar-side-icon>

        </v-toolbar>

        <!-- end desktop menu -->

        <!-- mobile menu -->
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                       <!-- <img src='@/assets/scissors.svg'  alt="" width="45" >-->
                    </v-list-tile-avatar>

                    <v-list-tile-content v-if="user">
                        <v-list-tile-title>  {{user.name +' '+user.surname}}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content v-else>
                        <v-list-tile-title>Menu</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <!-- admin only-->
                <v-list-tile
                        :class="'/admin' === $route.path ? 'highlighted' : ''"
                        v-if="adminOnly"
                        @click=""

                >
                    <router-link to="/admin" class="header_mobile_anchor">
                        <v-list-tile-action>
                             <v-icon>fas fa-users-cog</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                             <v-list-tile-title>Admin</v-list-tile-title>
                        </v-list-tile-content>
                    </router-link>
                </v-list-tile>
                <v-list-tile
                        v-for="item in itemsLoggedIn"
                        v-if="auth && item.title !== 'account'"
                        :key="item.title"
                        @click=""
                        :class="item.link === $route.path ? 'highlighted' : ''"
                >
                    <router-link :to=item.link class="header_mobile_anchor">
                        <v-list-tile-action >
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content :class="item.link === $route.path ? 'highlighted' : ''">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </router-link>


                </v-list-tile>
                <v-list-tile

                        v-for="item in itemsLoggedOut"
                        :class="item.link === $route.path ? 'highlighted' : ''"
                        :key="item.title"
                        @click=""
                >
                    <router-link :to=item.link class="header_mobile_anchor">
                    <v-list-tile-action :class="item.link === $route.path ? 'highlighted' : ''">
                         <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                         <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    </router-link>
                </v-list-tile>
                <v-list-tile
                        v-if="checkToken"
                        @click="logout"
                >
                    <v-list-tile-action>
                         <v-icon> fas fa-sign-out-alt</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                         <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        data () {

            return {
                user: '',
                drawer: null,
                itemsLoggedOut: [
                    { title: 'contact', icon: ' fas fa-envelope', link: '/contact' },
                    { title: 'about', icon: ' fas fa-info-circle', link: '/about' },
                    { title: 'account', icon: 'fas fa-user-circle', link: '/profile' }
                ],
                itemsLoggedIn: [
                    { title: 'dashboard', icon: 'fas fa-cog', link: '/dashboard' },
                    { title: 'calendar', icon: 'fas fa-calendar-alt', link: '/calendar' },
                    { title: 'account', icon: 'fas fa-user-circle', link: '/profile' },
                ],

                dropdown: [
                    { title: 'contact', icon: ' fas fa-envelope', link: '/contact' },
                    { title: 'about', icon: ' fas fa-info-circle', link: '/about' },
                ],
            }
        },
        watch: {
            companyName (newCount, oldCount) {
                this.$forceUpdate();

            },


        },


        computed: {
            ...mapGetters([
                'companyName'
            ]),

            auth(){
                this.user = this.$store.getters.user.length > 0 && this.$store.getters.user
                return this.$store.getters.token &&  this.$store.getters.companyName
            },
            adminOnly() {

                 return this.$store.getters.token &&  this.$store.getters.companyName && this.$store.getters.companyName.is_superuser;

            },
            checkToken(){
                return this.$store.getters.token
            }


        },
        methods: {
            logout(){
                this.$store.dispatch('logout')
            },
            menu(bool){
                if(bool){
                    return this.itemsLoggedOut
                }
            }
        },
        created(){

        },
        beforeMount(){

        }
    }
</script>