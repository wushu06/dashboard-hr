<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 >
            <div class="department_head">


                <v-tooltip bottom   v-if="!single">
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small @click="addDepartment" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add department</span>
                </v-tooltip>

                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small @click="viewAll" v-on="on">
                            <v-icon color="black">far fa-eye</v-icon>
                        </v-btn>
                    </template>
                    <span>View company tree</span>
                </v-tooltip>


            </div>

            <div class="admin_area_result">

                    <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>
            <v-card  v-for="(department, index) in allDepartments"
                     :key="department.id"
                     avatar
                    hover
                     >
                <v-list>

                    <v-list-tile

                    >
                        <v-btn fab  class="transparent-color" small @click="editDepartment(department)" v-if="!single">
                            <v-icon color="grey">fas fa-user-edit</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small  @click="deleteDepartment(department)" v-if="!single">
                            <v-icon color="pink">fas fa-trash</v-icon>
                        </v-btn>

                        <v-list-tile-content>
                            <v-list-tile-title v-text="department.department_name"></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="department.name"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
            </div>
            <!-- delete dialog -->

            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Deleting Department:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this department?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialog = false"
                        >
                            Cancel
                        </v-btn>

                        <v-btn

                                color="pink"
                                flat="flat"
                                @click="deleteConfirmed"
                        >
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

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
                        <v-toolbar-title>Edit Department:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <EditDepartment :department="department"  @clicked="onDepartmentUpdated"/>
                    </v-list>

                </v-card>
            </v-dialog>

            <!-- Add user dialog -->

            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogAddDepartment"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogAddDepartment = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>New Department:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <AddDepartment  @clicked="onDepartmentAdded"/>
                    </v-list>
                </v-card>
            </v-dialog>

            <!-- dialog tree -->
            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogTree"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogTree = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{company_name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <Tree />
                    </v-list>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import EditDepartment from './EditDepartment'
    import AddDepartment from './AddDepartment'
    import Tree from './Tree'
    import moment from 'moment';
    import _ from 'lodash'

    export default {
        props: [
            'single'
        ],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            dialog: false,
            dialogEdit: false,
            dialogAddDepartment: false,
            dialogTree: false,
            id: '',
            name: '',
            user: '',
            currentUser:0,
            pageNumber: 0,
            currentPage: 0,
            increment:3,
            department: '',
            is_superuser: '',
            departmentName: '',
            company_name: '',
            load: true

        }),
        components: {
            EditDepartment, AddDepartment,  Tree
        },
        watch: {
            departments (newCount, oldCount) {
                this.load = !newCount
                this.pageNumber = newCount.length;
                this.snackbar = true
                return newCount.length > 0 ? newCount: []

            }
        },
        computed: {
            ...mapGetters([
                'departments'
            ]),
            allDepartments(){
                let d = this.$store.getters.departments.length > 0 ? this.$store.getters.departments : [] ;


                d.map(u => {

                    if(  !u.employees){
                        d.map(d=> {
                            if(d.id === u.id && d.employees){
                                u['head_name'] = d.head_name
                                u['head_surname'] = d.head_surname
                                u['employees'] = d.employees
                            }
                        })
                    }
                })
                //let ud = _.uniqBy(d, 'id')
                this.pageNumber = d.length
                return  d

            }
        },

        methods: {

            format(date){
                return moment(date).format('DD MMM');
            },
            onNextDepartment (value) {
                this.currentPage = value.currentPage
                this.increment = value.increment
            },

            onDepartmentUpdated (value) {
                this.dialogEdit = value
            },
            onDepartmentAdded (value) {
                this.dialogAddDepartment = value
            },
            deleteDepartment(department) {
                this.id = department.id
                this.departmentName = department.department_name
                this.dialog = true
                // this.$store.dispatch('deleteUser', id)
            },

            deleteConfirmed(){

                this.dialog = false
                this.$store.commit('MESSAGE', 'Deleting...')
                let data = {
                    id: this.id,
                    name: this.departmentName,
                    postUrl: 'departments/delete/'+this.id,
                    getUrl: 'departments/company/',
                    commit: 'GET_DEPARTMENTS'
                }

                this.$store.dispatch('post', data)
            },
            editDepartment(department){
                this.dialogEdit = true
                this.department = department

            },
            addDepartment(){
                this.dialogAddDepartment = true
            },
            viewAll(){
                this.dialogTree = true
            }

        },
        beforeMount(){
            this.$store.dispatch('checkToken');
            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.company_name = this.$store.getters.companyName.company_name
            this.currentUser =   this.$store.getters.user.id
        },
        mounted() {
            let data = {
                getUrl: 'departments/company/',
                commit: 'GET_DEPARTMENTS'
            }
            this.$store.dispatch('get', data)


        }
    }
</script>
