<template>
    <v-layout row class="admin_layout">
        <v-flex xs12 >
            <div class="kudos_head">
                <v-tooltip bottom    v-if="!single">
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addKudos" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add Kudos</span>
                </v-tooltip>
                <v-tooltip bottom   v-if="all && !single">
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="award" v-on="on">
                            <v-icon color="black">fas fa-award</v-icon>
                        </v-btn>
                    </template>
                    <span>Kudos Leaderboard </span>
                </v-tooltip>

                <v-btn  fab  class="grey-color" small @click="getAll" v-if="!all && !single">
                    <v-icon color="black">fas fa-long-arrow-alt-left</v-icon>
                </v-btn>

                <v-tooltip bottom v-if="allK">
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
                        v-if="$route.path === '/admin'"
                        :items="actions"
                        label="Actions"
                        solo
                        v-on:input="onSelectAction"
                ></v-select>
                <v-select

                        :items="Object.keys(months)"
                        label="Sort by months"
                        solo
                        v-on:input="onSelectMonth"
                ></v-select>
            </div>

            <div class="admin_area_result">
                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>



            <v-card  v-for="(kudo, index) in kudosObject"
                     :key="kudo.id"
                     avatar
                     v-if="(index >= currentPage && index < currentPage+ increment)"
                     :class="!allK && 'grey-card'"
                     hover
                     height="auto"
            >

                <v-list>
                    <v-list-tile

                            avatar
                            class="list-item kudos-item"
                    >

                        <v-list-tile-avatar v-if="$route.path === '/admin' && all">
                            <v-checkbox
                                    color="primary"
                                    v-model="KudosIds"
                                    style="max-width: 20px"
                                    :value="kudo.id"

                            ></v-checkbox>
                        </v-list-tile-avatar>
                        <v-list-tile-avatar>

                            <img v-if="!kudo.avatar" src='@/assets/images/profile.svg'  alt="" width="45" >
                            <img v-else :src="kudo.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="kudo.receiver_name +' '+kudo.receiver_surname"></v-list-tile-title>
                            <v-list-tile-sub-title v-if="all" v-html="`<span class='text--primary'>${kudo.giver_name +' '+kudo.giver_surname+': '}</span> &mdash;${kudo.message}  `"></v-list-tile-sub-title>
                            <v-list-tile-sub-title v-html="`<span class='text--primary'>${formatDate(kudo.created_at)}</span>`"></v-list-tile-sub-title>

                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile class="kudos_actions" v-if="all">


                        <v-btn fab  class="transparent-color" small @click="deleteKudos(kudo)" v-if="$route.path === '/admin'">
                            <v-icon color="pink">fas fa-trash</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small @click="archiveKudos(kudo.id)" v-if="$route.path === '/admin'">
                            <v-icon color="grey">fas fa-archive</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small @click="likeKudos(kudo)"  v-if="!checkLike(kudo)" >
                            <v-icon color="grey">far fa-heart</v-icon>
                        </v-btn>

                        <v-btn fab  class="transparent-color" small   v-else >
                            <v-icon color="grey">fas fa-heart</v-icon>
                        </v-btn>

                        <span v-if="kudo.likes_number !== 0"  class="kudos_number" >
                           {{kudo.likes_number}}
                        </span>
                    </v-list-tile>
                    <v-list-tile v-else>
                        <v-btn fab  class="transparent-color" small    >
                            {{kudo.kudos_number}}
                            <v-icon color="grey">fas fa-award</v-icon>
                        </v-btn>
                        <v-btn fab  class="transparent-color" small   >
                            {{kudo.likes_number}}
                            <v-icon color="grey">fas fa-heart</v-icon>
                        </v-btn>

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
                    <v-card-title class="headline">Deleting Kudos:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this Kudos?
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
                    <v-card-title class="headline" v-if="allK">Archiving kudos:</v-card-title>
                    <v-card-title class="headline" v-else>Restore kudos:</v-card-title>

                    <v-card-text v-if="all">
                        Are you sure you want to add this kudos to archive?
                    </v-card-text>
                    <v-card-text v-else>
                        Are you sure you want to restore this kudos?
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
                        <v-toolbar-title>Kudos: </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <AddKudos @clicked="onKudosAdded"/>
                    </v-list>

                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import AddKudos from './AddKudos'
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
            errors:  '',
            dialog: false,
            dialogEdit: false,
            dialogAdd: false,
            pageNumber: 0,
            currentPage: 0,
            increment:6,
            count: '',
            id: '',
            page: 1,
            circle: true,
            total: '',
            all: true,
            actions: ['select all', 'unselect all', 'delete', 'archive'],
            allK: true,
            dialogArchive: false,
            multiple: false,
            KudosIds: [],
            kudosObject: '',
            kudosObjectCached: '',
            load: true,
            months: ['All'],
            byMonth: false,
            selectedMonth: '',
            show: "6"

        }),
        components: {
             AddKudos
        },
        watch: {
            kudos (newCount, oldCount) {
                //this.pageNumber = newCount.length;
                this.load = !newCount
                this.snackbar = true
                this.errors = newCount

            },
            allK(n){
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
                'kudos'
            ]),
            allKudos(){


                /*
                 // todo: add data prop (allkodus) so it will be easier to filter by date
                 */

            }
        },
        methods: {

            formatDate(d){

                return moment(d).format('MMM DD, YYYY')
            },
            formatDateYear(d){

                return moment(d).format('MMM YYYY')
            },
            onSelectMonth(selectObj){
              this.selectedMonth = selectObj
                if(selectObj === 'All') {
                    this.kudosObject = this.kudosObjectCached
                    this.pageNumber = this.kudosObjectCached.length
                    this.total = this.kudosObjectCached.length

                }else{
                    let arr = []
                    this.kudosObjectCached.map(k => {
                        if(moment(k.created_at).format('MMM YYYY') === selectObj){
                            arr.push(k)
                        }
                    })
                    this.pageNumber = arr.length
                    this.total = arr.length
                    this.kudosObject = arr
                }

            },
            onShow(selectObj){
              this.show = selectObj
                this.increment = Number(selectObj)
            },
            onSelectAction(selectObj){
                if(selectObj === 'delete'){
                    if(this.KudosIds.length > 0){
                        this.dialog = true
                        this.multiple = true
                    }
                }
                if(selectObj === 'archive' || selectObj === 'restore'){
                    if(this.KudosIds.length > 0){
                        this.dialogArchive = true
                        this.multiple = true

                    }
                }
                if(selectObj === 'select all'){

                    this.KudosIds = [];

                    if (!this.allSelected) {
                        (this.kudosObject).map(( kudo, index)=> {

                            if(index >= this.currentPage && index < this.currentPage+ this.increment) {

                                    this.KudosIds.push(kudo.id);


                            }
                        })
                    }
                }
                if(selectObj === 'unselect all'){
                    this.KudosIds = []
                }
            },
            next (page) {
                this.currentPage = page === 1 ? 0 : (page-1) * this.increment
            },
            checkSize(kudo){
                let values = []
                if (kudo.likes_group && kudo.likes_group!=='' ){
                    let x = kudo.likes_group.split(';')
                    x.map(s => {
                        values.push({
                            like_id: s.split(',')[0],
                            user_id: Number(s.split(',')[1])
                        })
                    })



                }else{
                    values = []
                }
                return _.size(values);
            },
            checkLike(kudo){
                let values = []
                if (kudo.likes_group && kudo.likes_group!=='' ){
                    let x = kudo.likes_group.split(';')
                    x.map(s => {
                        values.push({
                            like_id: s.split(',')[0],
                            user_id: Number(s.split(',')[1])
                        })
                    })



                }else{
                    values = []
                }
                //this.count = _.size(values);
                return _.find(values, {user_id: this.$store.getters.companyName.user_id })

            },
            onNextPage (value) {
                this.currentPage = value.currentPage
                this.increment = value.increment
            },
            onKudosAdded (value) {
                this.dialogAdd = value
            },
            deleteKudos(kudos) {

                this.id = kudos.id
                this.dialog = true

             },
            deleteConfirmed(){
                this.$store.commit('MESSAGE', 'Deleting...')
                let data = {
                    id: this.id,
                    postUrl: 'kudos/delete/',
                    getUrl: 'kudos/company/',
                    commit: 'GET_KUDOS'
                }
                if(this.multiple){
                    data['ids'] = this.KudosIds
                }
                this.multiple = false
                this.KudosIds = []
                this.$store.dispatch('post', data)
                this.allK = true
                this.dialog = false

               this.$store.commit('MESSAGE', 'Deleting...')
               this.$store.dispatch('post', data)


            },
            archiveKudos(id) {
                this.dialogArchive = true
                this.id = id
            },
            archiveConfirmed(){

                this.dialogArchive = false

                this.$store.commit('MESSAGE', 'Processing...')
                let data = {
                    id: this.id,
                    archive: this.allK,
                    postUrl: 'kudos/archive/',
                    getUrl: 'kudos/company/',
                    commit: 'GET_KUDOS'
                }
                if(this.multiple){
                    data['ids'] = this.KudosIds
                }
                this.multiple = false
                this.KudosIds = []

                this.$store.dispatch('post', data)
                this.allK = true
            },
            addKudos(){
                this.dialogAdd = true
            },
            likeKudos(kudo){

                let data = {
                    kudos_id: kudo.id,
                    user_id: this.$store.getters.companyName.user_id,

                    postUrl: 'kudos/like/',
                    getUrl: 'kudos/company/',
                    commit: 'GET_KUDOS'
                }
                this.$store.commit('MESSAGE', 'Adding...')

                this.$store.dispatch('post',data)
            },
            viewArchived(){
                this.currentPage = 0
                this.pageNumber = 0
                this.allK = false
                let data = {
                    getUrl: 'kudos-archived/company/',
                    commit: 'GET_KUDOS'
                }
                this.$store.dispatch('get', data)
            },
            getAll(){
                let data = {
                    getUrl: 'kudos/company/',
                    commit: 'GET_KUDOS'
                }
                this.$store.dispatch('get', data)
                this.all = true
                this.allK = true
                this.currentPage = 0
                this.pageNumber = 0
            },
            award(){
                this.currentPage = 0
                this.pageNumber = 0
                let id = this.$store.getters.companyName.company_id
                if(!id){
                    return;
                }
                const authorization = {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                }

                axios.get(`${process.env.VUE_APP_CMS_URL}kudos-award/company/${id}`, authorization)
                    .then((res)=> {
                        this.all = false
                        this.$store.commit('GET_KUDOS', res.data)

                    })
                    .catch(error => {
                        console.log(error);

                    })
            }
        },
        beforeMount(){
            let k = this.$store.getters.kudos

            let f = _.filter(k, {receiver_id: this.single})
            let r = this.single ? f : k
            console.log(r);
            this.pageNumber = r.length
            this.total = r.length
            let a = []
            a['All'] = 'all'
            if(this.all) {
                r = _.sortBy(r, function(o) {
                    return  moment(o.created_at);
                }).reverse()
                let da = ''
                let c = []
                r.map((k, i) => {

                    let created = moment(k.created_at).format('MMM YYYY')
                    if(da === created){
                        c.push(k)
                        a[created] = c
                    }else{
                        a[created] = [k]
                    }
                    da = created



                })
            }


           this.months = a
            this.kudosObject = r
            this.kudosObjectCached = r


        },
        mounted() {
            let data = {
                getUrl: 'kudos/company/',
                commit: 'GET_KUDOS'
            }
            this.$store.dispatch('get', data)


        }

    }
</script>
