<template>
    <v-layout row class="admin_layout" >
        <v-flex xs12  >
            <div class="kudos_head">
                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="addKudos" v-on="on">
                            <v-icon color="black">add</v-icon>
                        </v-btn>
                    </template>
                    <span>Add Kudos</span>
                </v-tooltip>

                <v-tooltip bottom  >
                    <template   v-slot:activator="{ on }">
                        <v-btn fab  class="grey-color " small  @click="award()" v-on="on">
                            <v-icon color="black">fas fa-award</v-icon>
                        </v-btn>
                    </template>
                    <span>Kudos Lead board </span>
                </v-tooltip>



                <v-select
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
            <v-card  v-for="(lead, index) in leadBoard"
                     :key="index"
                     avatar
                     hover
                     height="auto"
                     v-if="showBoard && allKudos"
            >

                <v-list>
                    <v-list-item

                            avatar
                            class="list-item kudos-item"
                    >
                        <v-list-item-title     v-html="lead.name"></v-list-item-title>
                        <v-list-item-subtitle  >
                            <v-icon color="black">fas fa-award</v-icon>
                            <span  v-html="lead.total"></span>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle  >
                            <v-icon color="grey">fas fa-heart</v-icon>
                            <span  v-html="lead.totalLikes"></span>
                        </v-list-item-subtitle>


                    </v-list-item>
                </v-list>
            </v-card>

            <div class="admin_area_result" v-if="allKudos">
                <div class="custom-loader-wrapper" v-if="load"><div class="custom-loader"></div></div>



                <v-card  v-for="(kudo, index) in allKudos"
                         :key="kudo.id"
                         avatar
                         hover
                         height="auto"
                         v-if="!showBoard"
                >

                    <v-list>
                        <v-list-item

                                avatar
                                class="list-item kudos-item"
                        >

                            <v-list-item-avatar >
                                <v-checkbox
                                        color="primary"
                                        v-model="KudosIds"
                                        style="max-width: 20px"
                                        :value="kudo.id"

                                ></v-checkbox>
                            </v-list-item-avatar>
                            <v-list-item-avatar>

                                <img v-if="!kudo.avatar" src='../../assets/images/profile.svg'  alt="" width="45"  >
                                <img v-else :src="kudo.avatar">
                            </v-list-item-avatar>

                            <v-list-item-content class="pl-3" v-if="kudo.sender">
                                <v-list-item-title v-html="kudo.receiver.name"></v-list-item-title>
                                <v-list-item-subtitle   v-html="`<span class='text--primary'>${kudo.sender.name }</span> ${kudo.text}  `"></v-list-item-subtitle>
                                <v-list-item-subtitle v-html="`<span class='text--primary'>${formatDate(kudo.created_at)}</span>`"></v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="kudos_actions" v-if="all">


                            <v-btn fab  class="transparent-color" small @click="deleteKudos(kudo)">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>
                            <v-btn fab  class="transparent-color" small   @click="unLikeKudos(kudo)"  v-if="checkLike(kudo)" >
                                <v-icon color="grey">fas fa-heart</v-icon>
                            </v-btn>
                            <v-btn fab  class="transparent-color" small @click="likeKudos(kudo)" v-else>
                                <v-icon color="grey">far fa-heart</v-icon>
                            </v-btn>




                            <span v-if="kudo.likes_number !== 0"  class="kudos_number" >

                           {{kudo.likes.length}}
                        </span>
                        </v-list-item>
                        <v-list-item v-else>
                            <v-btn fab  class="transparent-color" small    >
                              <!--  {{kudo.kudos_number}}--> count
                                <v-icon color="grey">fas fa-award</v-icon>
                            </v-btn>
                            <v-btn fab  class="transparent-color" small   >
                                <!--{{kudo.likes_number}}--> likes n

                                <v-icon color="grey">fas fa-heart</v-icon>
                            </v-btn>

                        </v-list-item>
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
                    <v-card-title class="headline">Deleting Kudos:</v-card-title>

                    <v-card-text>
                        Are you sure you want to delete this Kudos?
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
                        <v-toolbar-title>Kudos: </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list>
                        <AddKudos @clicked="onKudosAdded"/>
                    </v-list>

                </v-card>
            </v-dialog>
        </v-flex>
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

    import AddKudos from './AddKudos'
    import moment from 'moment'
    import _ from 'lodash'
    import axios from 'axios'

    export default {
        props: [
            'single', 'kudos'
        ],
        data: () => ({
            timeout: 6000,
            snackbar: false,
            message: '',
            total: '',
            page: 1,
            length: '',
            id: '',
            circle: true,
            dialogAdd: false,
            dialog: false,
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
            show: "6",
            leadBoard: '',
            showBoard: false,
            allKudos: ''

        }),
        components: {
          AddKudos
        },
        watch: {

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


        },
        methods: {
            getKudos(page = null){
                let url = page ? '/kudos?page='+page : '/kudos'
                axios.get(url)
                    .then((data) => {
                    console.log(data.data);
                        this.allKudos = data.data.data
                        this.total = data.data.total
                        this.length = Math.ceil(data.data.total / 10)
                        this.load  = false

                    })

                    .catch(e => {
                        this.load  = false
                        console.log(e);
                    })

            },
            award( next = false){
                if(next) {
                    this.showBoard = true
                }else{
                    this.showBoard = !this.showBoard
                }

                this.load = true;
                let grouped;
                let vm = this
                let url =  '/kudos/group/'+this.page
                axios.get(url)
                    .then((data) => {
                        grouped = data.data;
                        console.log(data.data);
                        console.log(data.data[1][0].result);
                        vm.leadBoard = data.data[0]
                        vm.total = data.data[1][0].result
                        vm.length = Math.ceil(vm.total / 10)
                        this.load  = false

                    })

                    .catch(e => {
                        this.load  = false
                        console.log(e);
                    })

            },
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

            },
            onSelectAction(selectObj){
                if(selectObj === 'delete'){
                    if(this.KudosIds.length > 0){
                        this.dialog = true
                        this.multiple = true
                    }
                }

                if(selectObj === 'select all'){

                    this.KudosIds = [];

                    if (!this.allSelected) {
                        (this.kudosObject).map(( kudo, index)=> {


                                this.KudosIds.push(kudo.id);



                        })
                    }
                }
                if(selectObj === 'unselect all'){
                    this.KudosIds = []
                }
            },
            next (page) {
                !this.showBoard  && this.getKudos(page)
                this.showBoard  && this.award( true)
            },
            checkSize(kudo){

            },

            onNextPage (value) {

            },
            onKudosAdded (value) {
                this.dialogAdd = value.dialog
                this.snackbar = true
                this.message = value.message
                this.getKudos(1)
            },
            deleteKudos(kudos) {

                this.id = kudos.id
                this.dialog = true

            },
            deleteConfirmed(){
                let data = {
                    id: this.id,
                    postUrl: 'kudos/delete/',
                    getUrl: 'kudos/company/',
                    commit: 'GET_KUDOS'
                }
                if(this.multiple){
                    data['ids'] = this.KudosIds
                }
                this.dialog = false
                axios.delete('/kudos/delete/' + this.id)
                    .then((msg) => {
                        this.message = 'Kudos has been deleted'
                        this.snackbar = true
                        this.getKudos(1)
                    })
                    .catch(e => {
                        console.log(e);
                    })



            },

            addKudos(){
                this.dialogAdd = true
            },
            likeKudos(kudo){
                axios.post('/likes/add/', {'kudos_id': kudo.id, 'receiver_id': kudo.receiver_id})
                    .then((msg) => {
                        this.message = 'Kudos has been liked'
                        this.snackbar = true
                        this.getKudos(this.page)
                    })
                    .catch(e => {
                        console.log(e);
                    })

            },
            unLikeKudos(kudo){
                axios.delete('/likes/delete/' + kudo.id)
                    .then((msg) => {
                        this.message = 'Kudos has been unliked'
                        this.snackbar = true
                        this.getKudos(this.page)
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            viewArchived(){

            },
            getAll(){

            },
            checkLike(kudo){
                let check = _.filter(kudo.likes, ['user_id', this.currentUser.id ]);
                return check.length > 0;
            }

        },
        beforeMount(){



        },
        mounted() {
            this.getKudos(this.page)

        }

    }
</script>
