<template>
    <v-layout row class="admin_layout" >
        <v-flex xs12  v-if="allRoles">
            <div class="departments_head">
                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addRole" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add roles</span>
                </v-tooltip>



            </div>


            <div class="admin_area_result" v-if="allRoles">
                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>



                <v-card  v-for="(role, index) in allRoles"
                         :key="role.id"
                         avatar
                         hover
                         height="auto"
                >

                    <v-list>
                        <v-list-item

                                avatar
                                class="list-item kudos-item"
                        >

                            <v-list-item-avatar >
                                <v-checkbox
                                        color="primary"
                                        v-model="roleIds"
                                        style="max-width: 20px"
                                        :value="role.id"

                                ></v-checkbox>
                            </v-list-item-avatar>


                            <v-list-item-content class="pl-3">
                                <v-list-item-title v-html="role.name"></v-list-item-title>
                                <v-list-item-subtitle v-if="role.department" v-html="role.department.name"></v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="kudos_actions">


                            <v-btn fab  class="transparent-color" small @click="deleteRole(role)" v-if="isAdmin">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>
                            <v-btn fab class="transparent-color" small @click="editRole(role)" v-if="isAdmin">
                                <v-icon color="grey">fas fa-user-edit</v-icon>
                            </v-btn>

                            <!--
                                                        <span v-if="kudo.likes_number !== 0"  class="departments_number" >
                            -->
                            <!--{{kudo.likes_number}}
                         </span>-->
                        </v-list-item>

                    </v-list>
                </v-card>
            </div>
            <div   v-if="allRoles.length <= 0">
                <h2>No roles yet!</h2>
            </div>


            <div class="text-xs-center pagination-wrapper">

                <div class="text-center"   v-if="total > 10">
                    <v-pagination
                            v-model="page"
                            :length="length"
                            @input="next"
                    ></v-pagination>
                </div>
                <div class="total" v-if="total">
                    <span>Total: {{total}}</span>
                </div>


            </div>
            <!-- delete dialog -->

            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Deleting roles:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this roles?
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



            <!-- Add user dialog -->

            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogAdd"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogAdd = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>roles: </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <ManageRoles :allDep="allDep" :role="null" @clicked="onRoleAdded"/>
                    </v-list>

                </v-card>
            </v-dialog>
        </v-flex>

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
                    <v-toolbar-title>{{name }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                    <ManageRoles :allDep="allDep" :role="role" @clicked="onRoleAdded"/>
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
    </v-layout>
</template>

<script>

    import ManageRoles from './ManageRoles'
    import moment from 'moment'
    import _ from 'lodash'
    import axios from 'axios'

    export default {
        props: [
            'single'
        ],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            message: '',
            total: '',
            page: 1,
            length: '',
            id: '',
            role: null,
            name: '',
            circle: true,
            dialogAdd: false,
            dialogEdit: false,
            dialog: false,
            all: true,
            actions: ['select all', 'unselect all', 'delete', 'archive'],
            allK: true,
            dialogArchive: false,
            multiple: false,
            roleIds: [],
            depObject: '',
            depObjectCached: '',
            load: true,
            show: "6",
            allRoles: '',
            allDep: ''

        }),
        components: {
            ManageRoles
        },
        watch: {




        },
        computed: {


        },
        methods: {
            getRoles(page = null){
                let url = page ? '/roles?page='+page : '/roles'
                axios.get(url)
                    .then((data) => {
                        console.log(data);
                        this.allRoles = data.data.data
                        this.total = data.data.total
                        this.length = Math.ceil(data.data.total / 10)
                        this.load  = false

                    })

                    .catch(e => {
                        this.load  = false
                        console.log(e);
                    })

            },


            next (page) {
                 this.getRoles(page)
            },

            onRoleAdded (value) {
                console.log(value);
                this[value.dialogType]= value.dialog
                this.snackbar = true
                this.message = value.message
                value.getRoles && this.getRoles(1)

            },
            deleteRole(role) {

                this.id = role.id
                this.dialog = true

            },
            deleteConfirmed(){

                this.dialog = false
                axios.delete('/roles/delete/' + this.id)
                    .then((msg) => {
                        this.message = 'Role has been deleted'
                        this.snackbar = true
                        this.getRoles(1)
                    })
                    .catch(e => {
                        console.log(e);
                    })



            },

            addRole(){
                this.dialogAdd = true
            },
            editRole(role) {
                console.log(role);
                this.dialogEdit = true
                this.role = role
                this.id = role.id
                this.name = role.name
                //
            },
            likeKudos(kudo){


            },
            viewArchived(){

            },
            getAll(){

            },

        },
        beforeMount(){



        },
        mounted() {

            this.getRoles(1)
            axios.get('/departments')
                .then((data) => {
                    this.allDep =  data.data.data

                })

                .catch(e => {

                })

        }

    }
</script>
