<template>
    <v-container class="admin_area ">
        <div class="admin_area_header">
            <h1>Admin area:</h1>
            <v-select
                    :items="views"
                    v-on:input="onSelect"
                    label="Change View"
                    persistent-hint
                    solo
                    height="40"

            ></v-select>
        </div>

        <v-layout row wrap >
            <v-flex xs12 sm12 align-start  v-if="selectedView === 'All' || selectedView === 'Employees'" >
                <h3>Manage employees</h3>
                <p>You can add, archive or delete employees.</p>

                <AllUsers />
                <div class="admin_spacer"></div>
            </v-flex>

            <v-flex xs12 sm12  v-if="selectedView === 'All' || selectedView === 'Departments'">
                <h3>Manage Departments</h3>
                <p>Create departments and assign its employees.</p>
                <AllDepartments />
                <div class="admin_spacer"></div>
            </v-flex>

            <v-flex xs12 sm12  v-if="selectedView === 'All' || selectedView === 'Holidays'">
                <h3>Manage Holidays</h3>
                <p>Request holidays, edit, archive or delete all holidays.</p>

                <AllHolidays :single="0"/>
                <div class="admin_spacer"></div>
            </v-flex>

            <v-flex xs12 sm12  v-if="selectedView === 'All' || selectedView === 'Kudos'">
                <h3>Manage Kudos</h3>
                <p>Give or like kudos, track your most liked employees</p>

                <AllKudos />
                <div class="admin_spacer"></div>
            </v-flex>

            <v-flex xs12 sm12  v-if="selectedView === 'All' || selectedView === 'Subscription'">

                <h3>Manage Subscription</h3>
                <p>Check your latest invoice, upgrade or change your billing details.</p>
                <div class="admin_area_sub">
                    <div>

                        <router-link to="/subscribe">
                            <v-btn  fab  class="grey-color admin_add" small>
                                <v-icon color="black">fas fa-cog</v-icon>
                            </v-btn>

                        </router-link>
                    </div>
                    <div v-if="this.invoice">
                        <a  :href="this.invoice" target="_blank">
                            <v-btn  fab  class="grey-color admin_add" small>
                                <v-icon color="black">fas fa-download</v-icon>
                            </v-btn>

                        </a>
                    </div>
                </div>
            </v-flex>
        </v-layout>

        <v-snackbar

                v-model="snackbar"
                bottom="bottom"
                right="right"
                :timeout="timeout"


        >
            {{message}}
            <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import AllUsers from './Users/AllUsers.vue'
    import AllHolidays from './Holidays/AllHolidays.vue'
    import AllDepartments from './Departments/AllDepartments.vue'
    import AllKudos from './Kudos/AllKudos.vue'
    import moment from 'moment'

    export default {
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            is_superuser: 0,
            active: '',
            invoice: '',
            views: ['All', 'Employees', 'Holidays', 'Departments', 'Kudos', 'Subscription'],
            selectedView:'All'
        }),
        components: {
            AllUsers, AllHolidays, AllDepartments, AllKudos
        },
        watch: {
            message (newCount, oldCount) {


                this.snackbar = true
                this.errors = newCount

            },
            subscriptionStatus(newStatus, oldStatus){
                this.active = newStatus
            }
        },
        computed: {
            ...mapGetters([
                'message',
                'subscriptionStatus'
            ]),

        },
        methods: {
            onSelect(selectObj) {
                this.selectedView = selectObj



            },
        },
        beforeMount(){

            this.$store.dispatch('checkToken');
            let period_end = this.$store.getters.companyName.current_period_end
            let today = moment(new Date()).format('YYYY-MM-DD')
            if(!period_end){
                this.$router.push({name: 'subscribe'})
            }

            if(today > period_end){
                const data = {
                    stripe_id: this.$store.getters.companyName.stripe_id,
                    user_id: this.$store.getters.companyName.user_id
                }
                this.$store.dispatch('checkSubscription', data)

            }else{

                this.active = false
            }

            if(this.$store.getters.companyName.is_superuser  !== 1) {
                this.$router.push({name: 'profile'})
            }
        },
        mounted() {

            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.invoice = this.$store.getters.companyName.invoice ?  this.$store.getters.companyName.invoice : ''

        }
    }
</script>
