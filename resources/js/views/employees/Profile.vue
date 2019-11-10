<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 sm12 class="profile">
            <v-card

            >
                <v-img
                        class="profile_img"
                        :src="user.avatar_path ? getPath(user.avatar_path) : require('../../assets/images/profile.svg')"

                        height="300px"
                        contain
                        aspect-ratio="2"
                >
                    <div class="profile_img_overlay"></div>
                    <v-layout
                            column
                            fill-height
                    >
                        <v-card-title v-if="canUpdate">

                            <v-btn  fab  class="grey-color admin_add" small @click="editUser(user)">
                                <v-icon color="black">edit</v-icon>
                            </v-btn>


                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-card-title class="white--text pl-5 pt-5">
                            <div class="display-1 ">{{user.name }}</div>

                        </v-card-title>
                    </v-layout>
                </v-img>

                <v-list two-line>
                    <v-list-item @click="">
                        <v-list-item-action>
                            <v-icon color="grey">phone</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{user.user_data.tel ? user.user_data.tel : '(--) -- -- -- --' }}</v-list-item-title>
                            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>chat</v-icon>
                        </v-list-item-action>
                    </v-list-item>


                    <v-divider inset></v-divider>

                    <v-list-item @click="">
                        <v-list-item-action>
                            <v-icon color="grey">mail</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{user.email}}</v-list-item-title>
                            <v-list-item-subtitle>Email address</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>


                    <v-divider inset></v-divider>
                    <v-list-item >
                        <v-list-item-action>
                            <v-icon color="grey">fas fa-birthday-cake</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{user.user_data.dob ? user.user_data.dob : '--/--/--'}}</v-list-item-title>
                            <v-list-item-subtitle>Date of birth</v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item @click="">
                        <v-list-item-action>
                            <v-icon color="grey">location_on</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{user.user_data.address ? user.user_data.address : 'No address'}}</v-list-item-title>
                            <v-list-item-subtitle>{{user.user_data.postcode ? user.user_data.postcode +', ' : ''}} {{user.user_data.city ? user.user_data.city : ''}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item @click="">
                        <v-list-item-action>
                            <v-icon color="grey">fas fa-user-cog</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{approver ? approver : 'Not assigned'}}</v-list-item-title>
                            <v-list-item-subtitle>Holiday approver</v-list-item-subtitle>

                        </v-list-item-content>

                    </v-list-item>
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

                     <ManageUser
                             :edit="true"
                             :departments="allDepartments"
                             :users="users"
                             :user="user"
                             @clicked="onUserAdded"/>

                </v-list>


            </v-card>
        </v-dialog>




    </v-layout>
</template>

<script>

    import ManageUser from './ManageUser.vue'
    import _ from 'lodash'

    export default {
        props: [
            'userProfile', 'authuser'
        ],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            dialog: false,
            dialogEdit: false,
            uSupervisor: '',
            approver: '',
            id: '',
            name: '',
            allDepartments: '',
            users: '',
            user: '',


        }),
        components: {
            ManageUser
        },
        watch: {


        },
        computed: {
           /* user(){
                let user =  this.authuser ? this.authuser : this.userProfile
                this.id = user.id
                return  user
            },*/
            canUpdate(){
                return this.owns(this.user.id)

            }

        },
        methods: {
            getPath(avatar){
              return window.location.origin+'/'+avatar
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
            onUserAdded(value) {

                this[value.dialogType]= value.dialog
                this.snackbar = true
                this.message = value.message
                this.getUser()
            },
            getUser(){
                axios.get('/employee/'+this.currentUser.id)
                    .then((data) => {
                        this.user = data.data

                    }).then(() => {
                        console.log(this.user.user_data.approver);
                        if(!this.user.user_data.approver){
                            return;
                        }
                        axios.get('/employee/'+this.user.user_data.approver)
                            .then((data) => {
                                this.approver = data.data.name

                            })
                    })

                    .catch(e => {

                    })
            }


        },
        beforeMount(){



        },
        mounted() {
            // console.log( this.authorize())
            this.getUser()
            let url =  '/departments'
            axios.get(url)
                .then((data) => {
                    this.allDepartments = data.data.data


                })
                .catch(e => {
                    console.log(e);
                })


        }
    }
</script>
