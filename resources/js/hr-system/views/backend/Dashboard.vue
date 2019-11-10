<template>
    <v-container class="admin_area">

        <div class="admin_area_header">
            <div>
                <h1>{{user_name}}'s Dashboard:</h1>
                <p>{{user.role && user.role}}<br>
                 {{department && '@ '+department}}</p>
            </div>

            <v-select
                    :items="views"
                    v-on:input="onSelect"
                    label="Change View"
                    persistent-hint
                    solo
                    height="40"

            ></v-select>
        </div>
        <v-layout row wrap>
            <v-flex xs12 sm12 v-if="selectedView === 'All' || selectedView === 'Holidays'">
                <h3>Holidays</h3>
                <p>Request holidays, edit, view archived or filter your holidays view.</p>

                <AllHolidays :single="user_id"/>
                <div class="admin_spacer"></div>

            </v-flex>
            <v-flex xs12 sm12 v-if="supervisor && (selectedView === 'All' || selectedView === 'Holidays') ">
                <h3>My team holidays</h3>
                <p>Approve or deny your team's holiday.</p>

                <AllHolidays  :team="user_id"/>
            </v-flex>
            <div class="admin_spacer"></div>
            <v-flex xs12 sm12 v-if="selectedView === 'All' || selectedView === 'Kudos'">
                <h3>Kudos</h3>
                <p>Give or like kudos, track most liked employees</p>

                <AllKudos />
                <div class="admin_spacer"></div>

            </v-flex>
            <v-flex xs12 sm12 v-if="selectedView === 'All' || selectedView === 'Kudos'">
                <h3>My Kudos</h3>
                <p>What others have said about you.</p>
                <AllKudos :single="user_id"/>
                <div class="admin_spacer"></div>

            </v-flex>
            <v-flex xs12 sm12 v-if="selectedView === 'All' || selectedView === 'Departments'">
                <h3>Departments</h3>
                <p>Company departments.</p>

                <AllDepartments :single="user_id" />
                <div class="admin_spacer"></div>

            </v-flex>
            <v-flex xs12 sm12 v-if="selectedView === 'All' || selectedView === 'Employees'">
                <h3>Employees</h3>
                <p>Company employees details.</p>

                <AllUsers :single="user_id" />
                <div class="admin_spacer"></div>

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
    import AllHolidays from './Holidays/AllHolidays.vue'
    import AllKudos from './Kudos/AllKudos'
    import AllDepartments from './Departments/AllDepartments'
    import AllUsers from './Users/AllUsers'
    import moment from 'moment'

    export default {
        data: () => ({
            timeout: 6000,
            snackbar: false,
            errors:  '',
            is_superuser: 0,
            company_name: '',
            user_name: '',
            user_id: '',
            supervisor: false,
            views: ['All', 'Employees', 'Holidays', 'Departments', 'Kudos'],
            selectedView:'All',
            user: '',
            department: ''
        }),
        components: {
             AllHolidays, AllKudos, AllDepartments, AllUsers
        },
        watch: {
            message (newCount, oldCount) {

                this.snackbar = true
                this.errors = newCount

            }
        },
        computed: {
            ...mapGetters([
                'message'
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

            }

        },
        mounted() {
            console.log(this.$store.getters.companyName);
            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.supervisor = this.$store.getters.companyName.user_id === this.$store.getters.companyName.supervisor
            this.company_name = this.$store.getters.companyName.company_name
            this.user_name = this.$store.getters.companyName.name
            this.user = this.$store.getters.companyName
            this.user_id = this.$store.getters.companyName.user_id

            this.department =  _.filter(this.$store.getters.departments, {id: this.user.department_id})[0].department_name

        }
    }
</script>
