<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 >
            <div class="holiday_head">
                <v-tooltip bottom   v-if="!team">
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addHoliday" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add holiday</span>
                </v-tooltip>

                <v-tooltip bottom v-if="all">
                    <template v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color" small @click="viewArchived"  v-on="on">
                            <v-icon color="black">fas fa-archive</v-icon>
                        </v-btn>
                    </template>
                    <span>View archived</span>
                </v-tooltip>


                <v-btn  fab  class="grey-color" small @click="getAll" v-else>
                    <v-icon color="black">fas fa-long-arrow-alt-left</v-icon>
                </v-btn>
                <v-select

                        :items="sortBy"
                        label="Filter by"
                        solo
                        v-on:input="onSelect"
                ></v-select>
                <v-select
                        v-if="$route.path === '/admin'"
                        :items="actions"
                        label="Actions"
                        solo
                        v-on:input="onSelectAction"
                ></v-select>

            </div>
            <div class="admin_area_result">

                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>
            <v-card  v-for="(holiday, index) in holidays"
                     :key="holiday.id"
                     avatar
                     hover
                     v-if="(index >= currentPage && index < currentPage+ increment)"
                     :class=" !all ? 'grey-card' : `${holiday.approved}_bg`">

                <v-list
                        v-if="selectedHoliday && selectedHoliday !== 'All' ? holiday.approved === selectedHoliday : true "

                >

                    <v-list-tile class="list-item" >
                        <v-checkbox
                                v-if="$route.path === '/admin'"
                                v-model="holidayIds"
                                style="max-width: 20px"
                                :value="holiday.id"
                                color="primary"
                                ></v-checkbox>
                        <v-btn fab  class="transparent-color" small  v-if="!team && all" @click="editHoliday(holiday)">
                            <v-icon color="grey">fas fa-user-edit</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small @click="archiveHoliday(holiday.id)" v-if="$route.path === '/admin' ">
                            <v-icon color="grey">fas fa-archive</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small  v-if="!team && !single" @click="deleteHoliday(holiday.id)">
                            <v-icon color="pink">fas fa-trash</v-icon>
                        </v-btn>

                        <v-list-tile-content class="item-text">
                            <v-list-tile-title v-text="holiday.name"></v-list-tile-title>
                            <v-list-tile-title  v-text="format(holiday.start_date) +' to '+ format(holiday.end_date)"></v-list-tile-title>

                        </v-list-tile-content>
                        <v-list-tile-content align-end class="item-count">
                            <v-list-tile-title v-if="!holiday.am_pm" v-text="countHoliday(holiday)+' days'"></v-list-tile-title>
                            <v-list-tile-title v-else v-text="`Half day: ${holiday.am_pm}`"></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="holiday.approved == 'pending' && is_superuser  === 1" class="btn" @click="approveHoliday(holiday, 'approved')">
                            <v-icon color="primary">fas fa-check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-action v-if="holiday.approved == 'pending' && is_superuser  === 1" class="btn appending" @click="approveHoliday(holiday, 'denied')">
                            <v-icon color="secondary">fas fa-times</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-action v-if="holiday.approved !== 'pending'" class="btn pending item-count" >
                            <span class="holiday_status">{{holiday.approved}}</span>
                        </v-list-tile-action>
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
            </div>            <!-- delete dialog -->

            <v-dialog

                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Deleting Holiday:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this holiday?
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
                <v-card >
                    <v-card-title class="headline" v-if="all">Archiving holiday:</v-card-title>
                    <v-card-title class="headline" v-else>Restore holiday:</v-card-title>

                    <v-card-text v-if="all">
                        Are you sure you want to add this holiday to archive?
                    </v-card-text>
                    <v-card-text v-else>
                        Are you sure you want to restore this holiday?
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
                        <v-toolbar-title>Edit holiday</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <EditHoliday :holiday="holiday"  @clicked="onHolidayUpdated"/>
                    </v-list>

                </v-card>
            </v-dialog>

            <!-- Add user dialog -->

            <v-dialog
                    fullscreen hide-overlay transition="dialog-bottom-transition"
                    v-model="dialogAddHoliday"
                    max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogAddHoliday = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>New holiday</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <AddHoliday :singleUser="single" @clicked="onHolidayAdded"/>
                    </v-list>

                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import EditHoliday from './EditHoliday'
    import AddHoliday from './AddHoliday'
    import moment from 'moment';
    import _ from 'lodash'

    export default {

        props: [
            'single',
            'team'
        ],
        data: () => ({
            selected: [],
            allSelected: false,
            holidayIds: [],
            timeout: 6000,
            snackbar: false,
            errors:  '',
            dialog: false,
            dialogEdit: false,
            dialogAddHoliday: false,
            id: '',
            name: '',
            user: '',
            currentUser:0,
            pageNumber: 0,
            currentPage: 0,
            increment: 6,
            holiday: '',
            is_superuser: '',
            page: 1,
            circle: true,
            sortBy: ['approved', 'denied', 'pending', 'All'],
            actions: ['select all', 'unselect all', 'delete', 'archive'],
            selectedHoliday: '',
            total:'',
            holidaysObject: '',
            all: true,
            dialogArchive: false,
            multiple: false,
            load: true,
            show: "6"

        }),
        components: {
            EditHoliday, AddHoliday
        },
        watch: {
            holidays (newCount, oldCount) {
                this.load = !newCount
                this.pageNumber = newCount.length;
                this.snackbar = true
                return newCount

            },
            all(n){
                let a = this.actions
                if(n){
                    this.actions = ['select all', 'unselect all', 'delete', 'archive']

                }else{
                    this.actions = ['select all', 'unselect all', 'delete', 'restore']
                }
            }
        },
        computed: {
            ...mapGetters([
                'holidays'
            ]),
            holidays(){

                let h;
                if(this.$store.getters.holidays.length > 0){
                    h = _.sortBy(this.$store.getters.holidays, function(o) {

                       // return  moment(o.start_date);
                        return  moment(o.created_at);
                    }).reverse()
                }else{
                    h = []
                }
                if(this.single ) {

                    h = _.filter(h, ['user_id', this.single]);

                }
                if(this.team ) {

                    _.remove(h, ['user_id', this.team]);
                    h = _.filter(h, ['supervisor', this.team])
                }
                this.total = h.length
                this.holidaysObject = h
                return h;


            }
        },

        methods: {

            onSelect(selectObj) {

                this.selectedHoliday = selectObj
                let h = this.$store.getters.holidays

                if(selectObj === 'All') {
                    this.pageNumber = h.length;
                    this.total = h.length
                }else{
                    h =_.filter(h, {approved: selectObj})
                    this.total = h.length
                    this.pageNumber = h.length

                }

            },
            onShow(selectObj){
                this.show = selectObj
                this.increment = Number(selectObj)
            },
            onSelectAction(selectObj){
                if(selectObj === 'delete'){
                    if(this.holidayIds.length > 0){
                        this.dialog = true
                        this.multiple = true
                    }
                }
                if(selectObj === 'archive' || selectObj === 'restore'){
                    if(this.holidayIds.length > 0){
                        this.dialogArchive = true
                        this.multiple = true

                    }
                }
                if(selectObj === 'select all'){

                    this.holidayIds = [];

                    if (!this.allSelected) {
                        (this.holidaysObject).map(( holiday, index)=> {

                            if(index >= this.currentPage && index < this.currentPage+ this.increment) {
                                if(this.selectedHoliday && this.selectedHoliday !== 'All'  ){
                                    holiday.approved === this.selectedHoliday && this.holidayIds.push(holiday.id);
                                }else{
                                    this.holidayIds.push(holiday.id);
                                }

                            }
                        })
                    }
                }
                if(selectObj === 'unselect all'){
                    this.holidayIds = []
                }
            },
            next (page) {
                this.currentPage = page === 1 ? 0 : (page-1) *  this.increment
            },
            format(date){
                return moment(date).format('DD MMM');
            },
            onNextHoliday (value) {
                this.currentPage = value.currentPage
                this.increment = value.increment
            },
            countHoliday(holiday){
                let a = moment(holiday.start_date)
                let b = moment(holiday.end_date)
                return b.diff(a, 'days') + 1


            },
            onHolidayUpdated (value) {
                this.dialogEdit = value
            },
            onHolidayAdded (value) {
                this.dialogAddHoliday = value
            },
            deleteHoliday(id) {
                this.id = id
                this.dialog = true

            },
            deleteConfirmed(){

                this.dialog = false
                this.$store.commit('MESSAGE', 'Deleting...')
                let data = {
                    id: this.id,

                    postUrl: 'requests/delete/',
                    getUrl: 'holidays/company/',
                    commit: 'GET_HOLIDAYS'
                }
                if(this.multiple){
                    data['ids'] = this.holidayIds
                }
                this.multiple = false
                this.holidayIds = []
                this.$store.dispatch('post', data)
                this.all = true
            },
            archiveHoliday(id) {
                this.dialogArchive = true
                this.id = id
            },
            archiveConfirmed(){

                this.dialogArchive = false

                this.$store.commit('MESSAGE', 'Processing...')
                let data = {
                    id: this.id,
                    archive: this.all,

                    postUrl: 'holiday/archive',
                    getUrl: 'holidays/company/',
                    commit: 'GET_HOLIDAYS'
                }
                if(this.multiple){
                    data['ids'] = this.holidayIds
                }
                this.multiple = false
                this.holidayIds = []

                this.$store.dispatch('post', data)
                this.all = true
            },
            editHoliday(holiday){
                this.dialogEdit = true
                this.holiday = holiday

            },
            addHoliday(){
                this.dialogAddHoliday = true
            },
            approveHoliday(  holiday, approval){
                let data = {
                    email: holiday.email,
                    id:  holiday.id,
                    user_id:  holiday.user_id,
                    count: this.countHoliday(holiday),
                    approved: approval,
                    type: holiday.type ? holiday.type : '',

                    postUrl: 'requests/approve/'+holiday.id,
                    getUrl: 'holidays/company/',
                    commit: 'GET_HOLIDAYS'
                }

                this.$store.commit('MESSAGE', 'Processing...')
                this.$store.dispatch('post', data)
            },
            viewArchived(){
                this.currentPage = 0
                this.pageNumber = 0
                this.all = false
                let data = {
                    getUrl: 'holidays-archived/company/',
                    commit: 'GET_HOLIDAYS'
                }
                this.$store.dispatch('get', data)
            },
            getAll(){
                this.currentPage = 0
                this.pageNumber = 0
                this.all = true
                let data = {
                    getUrl: 'holidays/company/',
                    commit: 'GET_HOLIDAYS'
                }
                this.$store.dispatch('get', data)
            }
        },
        beforeMount(){
            this.$store.dispatch('checkToken');
            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.currentUser =   this.$store.getters.user.id

        },
        mounted() {
            let data = {
                getUrl: 'holidays/company/',
                commit: 'GET_HOLIDAYS'
            }
            this.$store.dispatch('get', data)


        }
    }
</script>

