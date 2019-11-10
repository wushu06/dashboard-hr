<template>
    <v-container class="admin_area">
        <v-layout>


            <v-flex>
                <v-sheet >
                    <FullCalendar
                            defaultView="dayGridMonth"
                            :plugins="calendarPlugins"
                              :events="events"
                    />

                </v-sheet>
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
<style lang='scss'>

    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/daygrid/main.css';

</style>
<script>

    import { mapState, mapGetters } from 'vuex';
    import moment from 'moment';
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'

    export default {
        data: () => ({
            today: moment().format('YYYY-MM-DD') ,
            calendarPlugins: [ dayGridPlugin ],
            timeout: 6000,
            snackbar: false,
            errors:  '',
            is_superuser: 0,
            company_name: '',
            user_name: '',
            user_id: '',

        }),
        components: {
            dayGridPlugin,FullCalendar // make the <FullCalendar> tag available
        },
        watch: {
            message (newCount, oldCount) {
 console.log(newCount);
                this.snackbar = true
                this.errors = newCount

            },
            holidays(n, o){
                console.log(n);
            }
        },
        computed: {
            ...mapGetters([
                'message'
            ]),
            events(){

                let events = []
                this.$store.getters.holidays.map(h=> {
                    events.push({
                        title: h.name,
                        start: h.start_date,
                        end: h.end_date
                    })

                })
                return events;
            }

        },
        methods: {

        },
        beforeMount(){
            let data = {
                getUrl: 'holidays/company/',
                commit: 'GET_HOLIDAYS'
            }
            this.$store.dispatch('get', data)

            this.$store.dispatch('checkToken');
            let period_end = this.$store.getters.companyName.current_period_end
            let today = moment(new Date()).format('YYYY-MM-DD')
            if(!period_end || today > period_end){
                this.$router.push({name: 'subscribe'})
            }

        },
        mounted() {
            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.company_name = this.$store.getters.companyName.company_name
            this.user_name = this.$store.getters.companyName.name
            this.user_id = this.$store.getters.companyName.user_id
        }
    }
</script>
