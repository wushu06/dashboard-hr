<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 sm12 class="profile">
            <v-card
                v-if="user"
            >

                <v-img
                        class="profile_img"
                        :src="user.avatar ? user.avatar : require('@/assets/images/user.svg') "
                        height="300px"
                        contain
                        aspect-ratio="2"
                >
                    <div class="profile_img_overlay"></div>
                    <v-layout
                            column
                            fill-height
                    >
                        <v-card-title v-if="!userProfile">

                            <v-btn  fab  class="grey-color admin_add" small @click="editUser(currentUser)">
                                <v-icon color="black">edit</v-icon>
                            </v-btn>


                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-card-title class="white--text pl-5 pt-5">
                            <div class="display-1 ">{{user.name + ' '+user.surname}}</div>
                            <v-list-tile-sub-title class="white--text">{{user.role && user.role}}</v-list-tile-sub-title>
                            <v-list-tile-sub-title class="white--text">{{department && '@ '+ department}}</v-list-tile-sub-title>

                        </v-card-title>
                    </v-layout>
                </v-img>

                <v-list two-line>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="grey">phone</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.telephone ? user.telephone : '(--) -- -- -- --' }}</v-list-tile-title>
                            <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>chat</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="grey">mail</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.email}}</v-list-tile-title>
                            <v-list-tile-sub-title>Email address</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>



                    <v-divider inset></v-divider>
                    <v-list-tile >
                        <v-list-tile-action>
                            <v-icon color="grey">fas fa-birthday-cake</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.dob ? user.dob : '--/--/--'}}</v-list-tile-title>
                            <v-list-tile-sub-title>Date of birth</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="grey">location_on</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.address ? user.address : 'No address'}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{user.post_code ? user.post_code +', ' : ''}} {{user.city ? user.city : ''}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="grey">fas fa-user-cog</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{uSupervisor ? uSupervisor : 'Not assigned'}}</v-list-tile-title>
                            <v-list-tile-sub-title>Supervisor</v-list-tile-sub-title>

                        </v-list-tile-content>
                        <v-list-tile-content>

                            <v-list-tile-title>{{hApprover ? hApprover : 'Not assigned'}}</v-list-tile-title>
                            <v-list-tile-sub-title>Holiday approver</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>


            <!-- Edit dialog -->

            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"

                    v-model="dialogEdit"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogEdit = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Edit {{name}}:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <EditUser :user="user" @clicked="onUserUpdated"/>
                    </v-list>


                </v-card>
            </v-dialog>

            <!-- Add user dialog -->

            <v-dialog
                    v-model="dialogAdd"
                    max-width="900"
            >
                <v-card>
                    <v-card-title class="headline">New user:</v-card-title>

                    <v-card-text>
                        <AddUser @clicked="onUserAdded"/>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialogAdd = false"
                        >
                            Cancel
                        </v-btn>


                    </v-card-actions>
                </v-card>
            </v-dialog>


    </v-layout>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import EditUser from './Users/EditUser'
    import AddUser from './Users/AddUser'
    import _ from 'lodash'
    import moment from 'moment'

    export default {
        props: [
            'userProfile'
        ],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            dialog: false,
            dialogEdit: false,
            dialogAdd: false,
            id: '',
            name: '',
            hApprover: '',
            uSupervisor: '',
            currentUser: '',
            pageNumber: 0,
            currentPage: 0,
            increment:3,
            getAllUsers: [],
            department: ''
        }),
        components: {
            EditUser, AddUser
        },
        watch: {
            AllUsers (newU, oldCount) {
                if(oldCount !== newU) {
                    this.snackbar = true
                    this.getAllUsers = newU
                }

            },
            message (newCount, oldCount) {
                if(oldCount !== newCount){
                    this.snackbar = true
                    this.errors = newCount
                }



            },


        },
        computed: {
            ...mapGetters([
                'AllUsers',
                'message',
            ]),
            user(){

                if(this.userProfile){
                    this.currentUser =  this.userProfile

                    let h = _.filter(this.$store.getters.AllUsers, {user_id: this.userProfile.holiday_approver})
                    console.log(h);
                    this.hApprover = h.length > 0 ? h[0].user_name : ''

                    let s = _.filter(this.$store.getters.AllUsers, {user_id: this.userProfile.supervisor})
                    this.uSupervisor = s.length > 0 ? s[0].user_name : ''

                    this.department =  _.filter(this.$store.getters.departments, {id:  this.userProfile.department_id})[0].department_name

                    return this.userProfile
                }
                let users = this.$store.getters.AllUsers
                let user =  _.filter(users, {user_id:  this.$store.getters.user.id})

                this.department =  user && _.filter(this.$store.getters.departments, {id: user[0].department_id})[0].department_name

                let h = _.filter(this.$store.getters.AllUsers, {user_id: user.holiday_approver})
                this.hApprover = h.length > 0 ? h[0].user_name : ''

                let s = _.filter(this.$store.getters.AllUsers, {user_id: user.supervisor})
                this.uSupervisor = s.length > 0 ? s[0].user_name : ''
                this.currentUser =   user[0]
                return user.length > 0 ? user[0] : ''

            },


        },
        methods: {
            onNextPage (value) {
                this.currentPage = value.currentPage
                this.increment = value.increment
            },
            onUserUpdated (value) {
                this.dialogEdit = value
            },
            onUserAdded (value) {
                this.dialogAdd = value
            },
            deleteUser(user) {
                this.id = user.user_id
                this.name = user.name
                this.dialog = true
                // this.$store.dispatch('deleteUser', id)
            },
            deleteConfirmed(){

                this.dialog = false

                this.$store.dispatch('deleteUser', this.id)
            },
            editUser(user){

                this.dialogEdit = true
                this.user = user
                this.id = user.user_id
                this.name = user.name
                //
            },
            addUser(){
                this.dialogAdd = true
            },


        },
        beforeMount(){
            this.$store.dispatch('checkToken');
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            this.$store.dispatch('get', data)


        },
        mounted() {



            let period_end = this.$store.getters.companyName.current_period_end
            let today = moment(new Date()).format('YYYY-MM-DD')
            if(today > period_end){
                const data = {
                    stripe_id: this.$store.getters.companyName.stripe_id,
                    user_id: this.$store.getters.companyName.user_id
                }
                this.$store.dispatch('checkSubscription', data)

            }

        }
    }
</script>
