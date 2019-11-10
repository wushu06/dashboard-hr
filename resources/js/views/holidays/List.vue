<template>
    <v-layout row class="admin_layout" >
        <v-flex xs12  v-if="allHolidays">
            <div class="holidays_head">
                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addHoliday" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add holidays</span>
                </v-tooltip>



            </div>


            <div class="admin_area_result" v-if="allHolidays">
                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>



                <v-card  v-for="(holiday, index) in allHolidays"
                         :key="holiday.id"
                         avatar
                         hover
                         height="auto"
                         v-if="holiday.company_id === holiday.user.company.id"
                >

                    <v-list>
                        <v-list-item

                                avatar
                                class="list-item kudos-item"
                        >

                            <v-list-item-avatar >
                                <v-checkbox
                                        color="primary"
                                        style="max-width: 20px"
                                        :value="holiday.id"

                                ></v-checkbox>
                            </v-list-item-avatar>


                            <v-list-item-content class="pl-3">
                                <v-list-item-title v-html="holiday.user.name"></v-list-item-title>
                                <v-list-item-subtitle  v-text="format(holiday)"></v-list-item-subtitle>
                                <v-list-item-subtitle  v-text="'Holiday allowance: '+holiday.user.user_data.holiday_allowance +' days'"></v-list-item-subtitle>


                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="kudos_actions">


                            <v-btn fab  class="transparent-color" small @click="deleteHoliday(holiday)" v-if="isAdmin">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>
                            <v-btn fab class="transparent-color" small @click="editHoliday(holiday)" v-if="isAdmin">
                                <v-icon color="grey">fas fa-user-edit</v-icon>
                            </v-btn>

                        </v-list-item>

                    </v-list>
                </v-card>
            </div>
            <div   v-if="allHolidays.length <= 0">
                <h2>No holidays yet!</h2>
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
                    <v-card-title class="headline">Deleting holidays:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this holidays?
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
                        <v-toolbar-title>holidays: </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <ManageHolidays :users="allUsers"  :holiday="null" @clicked="onHolidayAdded"/>
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
                    <ManageHolidays :users="allUsers"  :holiday="holiday"  @clicked="onHolidayAdded"/>
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

    import ManageHolidays from './ManageHolidays'
    import moment from 'moment'
    import _ from 'lodash'
    import axios from 'axios'

    export default {

        data: () => ({
            timeout: 6000,
            snackbar: false,
            message: '',
            total: '',
            page: 1,
            length: '',
            id: '',
            allUsers: '',
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
            holiday: '',
            holidayObject: '',
            holidayObjectCached: '',
            load: true,
            show: "6",
            allHolidays: '',

        }),
        components: {
            ManageHolidays
        },
        watch: {




        },
        computed: {


        },
        methods: {
            getHolidays(page = null){
                let url = page ? '/holidays/?page='+page : '/holidays'
                axios.get(url)
                    .then((data) => {
                        this.allHolidays = data.data.data
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
                this.getHolidays(page)
            },

            onHolidayAdded (value) {
                this[value.dialogType]= value.dialog
                this.snackbar = true
                this.message = value.message
                value.getHolidays && this.getHolidays(1)

            },
            deleteHoliday(holiday) {

                this.id = holiday.id
                this.dialog = true

            },
            deleteConfirmed(){

                this.dialog = false
                axios.delete('/holiday/delete/' + this.id)
                    .then((msg) => {
                        console.log(msg);
                        this.message = 'Holiday has been deleted'
                        this.snackbar = true
                        this.getHolidays(1)
                    })
                    .catch(e => {
                        console.log(e);
                    })



            },

            addHoliday(){
                this.dialogAdd = true
            },
            editHoliday(holiday) {
                this.dialogEdit = true
                this.holiday = holiday
                this.id = holiday.id
                this.name = holiday.name
                //
            },
            likeKudos(kudo){


            },
            viewArchived(){

            },
            getAll(){

            },
            format(holiday){
                let a = moment(holiday.start_date)
                let b = moment(holiday.end_date)
                let diff =  b.diff(a, 'days') +1
                return a.format('DD MMM') +' to '+ b.format('DD MMM') + ' ('+ diff +'days)'

            },

        },
        beforeMount(){



        },
        mounted() {

            this.getHolidays(1)
            axios.get('/employees')
                .then((data) => {
                    this.allUsers =  data.data

                })

                .catch(e => {

                })


        }

    }
</script>
