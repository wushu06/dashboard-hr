<template>
    <v-layout row class="admin_layout" >
        <v-flex xs12  v-if="allDepartments">
            <div class="departments_head">
                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addDep" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add departments</span>
                </v-tooltip>



            </div>


            <div class="admin_area_result" v-if="allDepartments">
                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>



                <v-card  v-for="(dep, index) in allDepartments"
                         :key="dep.id"
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
                                        v-model="depIds"
                                        style="max-width: 20px"
                                        :value="dep.id"

                                ></v-checkbox>
                            </v-list-item-avatar>


                            <v-list-item-content class="pl-3">
                                <v-list-item-title v-html="dep.name"></v-list-item-title>
                                <v-list-item-subtitle v-if="dep.supervisor" v-html="dep.supervisor.name"></v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="kudos_actions">


                            <v-btn fab  class="transparent-color" small @click="deleteDep(dep)" v-if="isAdmin">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>
                            <v-btn fab class="transparent-color" small @click="editDep(dep)" v-if="isAdmin">
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
                    <v-card-title class="headline">Deleting departments:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this departments?
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
                        <v-toolbar-title>departments: </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <ManageDepartments :allUsers="allUsers" :dep="null" @clicked="onDepartmentAdded"/>
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
                    <ManageDepartments :allUsers="allUsers" :dep="dep" @clicked="onDepartmentAdded"/>
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

    import ManageDepartments from './ManageDepartment'
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
            dep: null,
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
            depIds: [],
            depObject: '',
            depObjectCached: '',
            load: true,
            show: "6",
            allDepartments: '',
            allUsers: ''

        }),
        components: {
          ManageDepartments
        },
        watch: {




        },
        computed: {


        },
        methods: {
            getDepartments(page = null){
                let url = page ? '/departments?page='+page : '/departments'
                axios.get(url)
                    .then((data) => {
                        this.allDepartments = data.data.data
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
                this.getDepartments(page)
            },

            onDepartmentAdded (value) {
                console.log(value);
                this[value.dialogType]= value.dialog
                this.snackbar = true
                this.message = value.message
                value.getDepartments && this.getDepartments(1)

            },
            deleteDep(dep) {

                this.id = dep.id
                this.dialog = true

            },
            deleteConfirmed(){

                this.dialog = false
                axios.delete('/departments/delete/' + this.id)
                    .then((msg) => {
                        this.message = 'Department has been deleted'
                        this.snackbar = true
                        this.getDepartments(1)
                    })
                    .catch(e => {
                        console.log(e);
                    })



            },

            addDep(){
                this.dialogAdd = true
            },
            editDep(dep) {
                console.log(dep);
                this.dialogEdit = true
                this.dep = dep
                this.id = dep.id
                this.name = dep.name
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

            this.getDepartments(1)
            console.log();
            axios.get('/employees')
                .then((data) => {
                    console.log(data.data);
                    this.allUsers =  data.data

                })

                .catch(e => {

                })

        }

    }
</script>
