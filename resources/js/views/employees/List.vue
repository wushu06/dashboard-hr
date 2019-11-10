<template>
    <v-layout row class="admin_layout">
        <v-flex xs12>
            <h1>Employees:</h1>

            <div class="users_head">
                <v-tooltip bottom v-if="isAdmin">
                    <template v-slot:activator="{ on }">
                        <v-btn fab class="grey-color " small @click="addUser" v-on="on">
                            <i class="fas fa-plus"></i>
                        </v-btn>
                    </template>
                    <span>Add employee</span>
                </v-tooltip>
                <p>total: <span v-text="total"></span></p>


            </div>
            <div class="admin_area_result">
                <div class="custom-loader-wrapper" v-if="load">
                    <div class="custom-loader"></div>
                </div>
                <v-card v-for="(user, index) in users"
                        :key="user.id"
                        avatar
                        hover
                >
                    <v-list
                        :class="owns(user.id) && 'active-card'"
                    >


                        <v-list-item class="list-item users-item">
                            <v-btn fab class="transparent-color" small @click="userCard(user)">
                                <v-icon color="grey">far fa-eye</v-icon>
                            </v-btn>
                            <v-btn fab class="transparent-color" small @click="editUser(user)" v-if="isAdmin">
                                <v-icon color="grey">fas fa-user-edit</v-icon>
                            </v-btn>


                            <v-btn fab class="transparent-color" small @click="deleteUser(user)" v-if="isAdmin">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>


                            <v-list-item-content class="item-text">
                                <v-list-item-title v-text="user.name"></v-list-item-title>
                            </v-list-item-content>


                            <img v-if="!user.avatar_path" src='../../assets/images/profile.svg'  alt="" width="45" >

                            <img v-else :src="user.avatar_path"  width="45" class="rounded-card">


                        </v-list-item>

                    </v-list>
                </v-card>
            </div>

            <!-- delete dialog -->

            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Deleting user:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this user permanently?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"

                                @click="dialog = false"
                        >
                            Cancel
                        </v-btn>

                        <v-btn

                                color="pink"

                                @click="deleteConfirmed"
                        >
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>


            <!-- Edit dialog -->

            <v-dialog
                    v-if="isAdmin"
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogEdit"
                    max-width="900"

            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogEdit = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{user.name }}</v-toolbar-title>
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

            <!-- Add user dialog -->

            <v-dialog
                    v-if="isAdmin"
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogAdd"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogAdd = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>New user:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>

                        <ManageUser
                                :edit="false"
                                :departments="allDepartments"
                                :users="users"
                                user=""
                                @clicked="onUserAdded"/>

                    </v-list>
                </v-card>
            </v-dialog>
            <!-- card user dialog -->

            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogCard"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogCard = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Employee card:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>

                           <Profile :userProfile="user"/>

                    </v-list>
                </v-card>
            </v-dialog>

            <v-snackbar

                    v-model="snackbar"
                    bottom="bottom"
                    right="right"
                    :timeout="timeout"


            >
                {{message}}
                <v-btn
                        color="pink"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
           <div class="text-center"  v-if="total > 10">
                <v-pagination
                        v-model="page"
                        :length="length"
                        @input="next"
                ></v-pagination>
            </div>

        </v-flex>
    </v-layout>
</template>

<script>
    import ManageUser from './ManageUser.vue'

       import Profile from './Profile.vue'
    import axios from 'axios'

    export default {

        props: ['employees', 'departments'],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors: '',
            dialog: false,
            dialogArchive: false,
            dialogEdit: false,
            dialogAdd: false,
            dialogCard: false,
            message: '',
            id: '',
            name: '',
            user: '',
            currentUser: '',
            users: '',
            load: true,
            allDepartments: '',
            total: '',
            page: 1,
            length: ''

        }),
        components: {
            ManageUser, Profile
        },
        watch: {},
        computed: {},
        methods: {
            getUsers(page = null){
                let url ='/employees/'+this.page+'/?page='+this.page
                console.log(url);

                axios.get(url)
                    .then((data) => {
                        console.log(data.data);
                        this.users = data.data.data
                        this.total = data.data.total
                        this.length = Math.ceil(data.data.total / 10)
                        this.load  = false

                    })

                    .catch(e => {
                        this.load  = false
                        console.log(e);
                    })

            },

            onUserAdded(value) {

                this[value.dialogType]= value.dialog
                this.snackbar = true
                this.message = value.message
                value.getUsers && this.getUsers(1)
            },

            deleteUser(user) {
                this.id = user.id
                this.name = user.name
                this.dialog = true
            },

            deleteConfirmed() {

                this.dialog = false
                axios.delete('/user/delete/' + this.id)
                    .then((msg) => {
                        this.message = 'User has been deleted'
                        this.snackbar = true
                        this.getUsers(1)
                    })
                    .catch(e => {
                        console.log(e);
                    })


            },

            next (page) {
                this.load = true
                this.page = page
                this.getUsers()
            },

            editUser(user) {

                this.dialogEdit = true
                this.user = user
                this.id = user.id
                this.name = user.name
                //
            },
            addUser() {
                this.dialogAdd = true
            },


            userCard(user) {
                this.dialogCard = true
                this.user = user
            },



        },

        mounted() {
           this.getUsers(1)
            this.allDepartments = this.employees
        },

    }
</script>
