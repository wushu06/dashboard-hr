<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 >

            <div class="users_head">
                <v-tooltip bottom  v-if="pageNumber < max && !single">
                    <template v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small @click="addUser" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add employee</span>
                </v-tooltip>


            <div  v-else>
                <v-chip   v-if="!single" text-color="white" class=" grey-color">
                    <router-link  to="/subscribe">
                        <v-avatar >
                            <v-icon color="pink" style="font-size: 16px"> fas fa-piggy-bank</v-icon>
                        </v-avatar>
                        <span  style="color: rgba(255, 82, 82, 1)">To add more users please upgrade</span>
                    </router-link>
                </v-chip>
            </div>

                <v-tooltip bottom v-if="all">
                    <template v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color" small @click="viewArchived"  v-on="on">
                            <v-icon color="black">fas fa-archive</v-icon>
                        </v-btn>
                    </template>
                    <span>View archived</span>
                </v-tooltip>

                <v-btn  fab  class="grey-color" small @click="getAll" v-else  >
                    <v-icon color="black">fas fa-long-arrow-alt-left</v-icon>
                </v-btn>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn  fab  class="grey-color" small @click="download" dark v-on="on">
                            <v-icon color="black">fas fa-download</v-icon>
                        </v-btn>
                    </template>
                    <span>Download users</span>
                </v-tooltip>


            <v-select
                    :items="usersDep"
                    v-on:input="onSelect"
                    label="All departments"
                    item-text="department_name"
                    item-value="id"
                    persistent-hint
                    solo
                    height="40"
            ></v-select>
            </div>
            <div class="admin_area_result">
             <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>
                <v-card  v-for="(user, index) in users"
                         v-for-callback="{key: index, array: users, callback: callback}"
                         :key="user.user_id"
                         avatar
                         v-if="selectedDep && selectedDep !== 9999 ? user.department_id === Number(selectedDep) : true "
                        hover

                        >


                    <v-list
                            v-if="(index >= currentPage && index < currentPage+ increment)"

                    >


                        <v-list-tile class="list-item users-item"  >
                            <v-btn fab  class="transparent-color" small @click="userCard(user)">
                                <v-icon color="grey">far fa-eye</v-icon>
                            </v-btn>
                            <v-btn fab  class="transparent-color" small @click="editUser(user)" v-if="all && !single">
                                <v-icon color="grey">fas fa-user-edit</v-icon>
                            </v-btn>
                            <v-btn fab  class="transparent-color" small @click="archiveUser(user)" v-if="!single">
                                <v-icon color="grey">fas fa-archive</v-icon>
                            </v-btn>

                            <v-btn fab  class="transparent-color" small @click="deleteUser(user)" v-if="!single">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>


                            <v-list-tile-content class="item-text">
                                <v-list-tile-title v-text="user.name+' '+user.surname"></v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-content class="item-count">
                                <v-list-tile-title v-text="user.role" ></v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-avatar style="padding: 20px 0;">
                                <img v-if="!user.avatar" src='@/assets/images/profile.svg'  alt="" width="45" >

                                <img v-else :src="user.avatar">
                            </v-list-tile-avatar>

                        </v-list-tile>

                    </v-list>
                </v-card>
            </div>

            <div class="text-xs-center pagination-wrapper">
                <div class="show_select">
                    <v-select
                            v-model="show"
                            :items="['6','12','24']"
                            :label="show"
                            solo
                            v-on:input="onShow"
                    ></v-select>
                </div>
                <v-pagination
                        v-if="pageNumber > increment"
                        v-model="page"
                        :length="Math.ceil(pageNumber / increment)"
                        :circle="circle"
                        @input="next"
                        :total-visible="5"
                        color="black"
                        class="grey-page"
                ></v-pagination>
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
                    <v-card-title class="headline">Deleting user:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this user permanently?
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
            <!-- Archive dialog-->

            <v-dialog
                    v-model="dialogArchive"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline" v-if="all">Archiving user:</v-card-title>
                    <v-card-title class="headline" v-else>Restore user:</v-card-title>

                    <v-card-text v-if="all">
                        Are you sure you want to add this user to archive?
                    </v-card-text>
                    <v-card-text v-else>
                        Are you sure you want to restore this user?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialogArchive = false"
                        >
                            Cancel
                        </v-btn>

                        <v-btn

                                color="pink"
                                flat="flat"
                                @click="archiveConfirmed"
                        >
                            Confirm
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
                        <v-toolbar-title>{{user.name +' '+user.surname}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>
                        <EditUser :user="user" @clicked="onUserUpdated"/>
                    </v-list>
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
                    <v-toolbar-title>New user:</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                        <AddUser @clicked="onUserAdded"/>
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
                        <UserCard :userProfile="user"/>
                    </v-list>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import EditUser from './EditUser'
    import AddUser from './AddUser'
    import UserCard from '../Profile'
    import _ from 'lodash'
    import Pagination from '../../../components/Pagination'

    export default {

        props: ['employees'],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            dialog: false,
            dialogArchive: false,
            dialogEdit: false,
            dialogAdd: false,
            dialogCard: false,
            id: '',
            name: '',
            user: '',
            currentUser: '',
            pageNumber: 0,
            currentPage: 0,
            increment: 6,
            userKeys: {},
            userDep: '',
            selectedDep: '',
            index: 1,
            max: '',
            page: 1,
            circle: true,
            loopI: 0,
            total: '',
            all: true,
            load: true,
            show: "6"
        }),
        components: {
            EditUser, AddUser, UserCard
        },
        watch: {
            AllUsers (newCount, oldCount) {
                this.load = !newCount
                this.snackbar = true
                this.errors = newCount

            },


        },
        computed: {
            ...mapGetters([
                'AllUsers'
            ]),
            items() {
                return {item1: 'value1', item2: 'value2'}
            },
            users(){
                let users = this.$store.getters.AllUsers

                this.pageNumber = users.length;
                this.total = users.length;
                if(this.selectedDep ) {
                    if (this.selectedDep === 9999) {
                        this.pageNumber = users.length;
                        this.total = users.length;
                    } else {
                        users = _.filter(users, {department_id: Number(this.selectedDep)})
                        this.pageNumber = users.length
                        this.total = users.length
                    }
                }
                return users


            },
            usersDep(){

                let users = this.$store.getters.AllUsers
                let g = _.groupBy(users, 'department_id');
                let departments = this.$store.getters.departments
                // rename null
                const newObject = {};
                //delete Object.assign(newObject, g, {['Not assigned']: g['null'] })['null'];


                let userDep = []
                Object.keys(g).map(key => {
                    let f = _.filter(departments, {id: Number(key)})
                    userDep.push({
                        id: key,
                        department_name : f.length > 0 ? f[0].department_name : 'Not assigned'

                    })
                })
                userDep.push({
                    id: 9999,
                    department_name: 'All'
                })
                //userDep =  _.uniqBy(userDep, 'department_name')


                this.pageNumber = Object.values(this.$store.getters.AllUsers).length
                this.total = Object.values(this.$store.getters.AllUsers).length

                return userDep
                //return this.$store.getters.AllUsers.length > 0 ?  this.$store.getters.AllUsers : [];

            },

        },
        methods: {

            next (page) {
                this.currentPage = page === 1 ? 0 : (page-1) *  this.increment
            },
            onSelect(selectObj) {
                this.currentPage = 0
                this.selectedDep = selectObj



            },
            onShow(selectObj){
                this.show = selectObj
                this.increment = Number(selectObj)
            },
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
          },
            archiveUser(user) {

                this.id = user.user_id

                this.name = user.name
                this.dialogArchive = true
          },
            deleteConfirmed(){

                this.dialog = false
                this.$store.commit('MESSAGE', 'Deleting...')
                let data = {
                    id: this.id,
                    postUrl: 'users/delete/',
                    getUrl: 'users/company/',
                    commit: 'GET_ALL_USERS'
                }
                this.$store.dispatch('post', data)
            },
            archiveConfirmed(){

                this.dialogArchive = false
                this.$store.commit('MESSAGE', 'Processing...')


                let data = {
                    id: this.id,
                    archive: this.all,

                    postUrl: 'users/archive/',
                    getUrl: 'users/company/',
                    commit: 'GET_ALL_USERS'
                }


                this.$store.dispatch('post', data)
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
            callback(key) {
                //console.log(key)
                //console.log('loop has finished')
            },
            viewArchived(){
                this.all = false
                this.$store.dispatch('getAllArchivedUsers')
            },
            getAll(){
                this.all = true
                let data = {
                    getUrl: 'users/company/',
                    commit: 'GET_ALL_USERS'
                }
                this.$store.dispatch('get', data)
            },
            download(){

                let data = {
                    getUrl: 'users/download/',
                    commit: 'GET_ALL_USERS'
                }
                this.$store.dispatch('get', data)
            },
            userCard(user){

                this.dialogCard = true
                this.user = user
            }


        },
        beforeMount(){
            this.$store.dispatch('checkToken');

        },
        mounted() {
            this.users = this.employees.data
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            this.$store.dispatch('get', data)

            this.currentUser =   this.$store.getters.user.id
            switch (this.$store.getters.companyName.package) {
                case 'basic':
                    this.max = 10
                    break;
                case 'bronze':
                    this.max = 20
                    break;
                case 'silver':
                    this.max= 50
                    break;
                case 'gold':
                    this.max= 100
                    break;
                case 'platinum':
                    this.max = 100

            }

        },
        directives: {
            forCallback(el, binding) {
                let element = binding.value
                var key = element.key
                var len = 0

                if (Array.isArray(element.array)) {
                    len = element.array.length
                }

                else if (typeof element.array === 'object') {
                    var keys = Object.keys(element.array)
                    key = keys.indexOf(key)
                    len = keys.length
                }

                if (key == len - 1) {
                    if (typeof element.callback === 'function') {
                        element.callback(key)
                    }
                }
            }
        },
    }
</script>
