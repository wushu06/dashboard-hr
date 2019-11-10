<template>
    <v-container class="pa-0">

        <form>


            <v-container>
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                    >

                        <v-select
                                v-if="singleUser === 0"
                                item-text="select.name"
                                item-value="select"
                                :items="users"
                                v-on:input="onSelect"
                                label="Select user"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="date"
                                        label="Start date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    min="1950-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-menu
                                ref="menuEnd"
                                v-model="menuEnd"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }"  v-if="!displayAm">
                                <v-text-field
                                        v-model="dateEnd"
                                        label="End date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker

                                    v-model="dateEnd"
                                    :min="min"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>

                    <v-flex
                            xs12
                            md12
                    >
                        <v-select
                                v-model="type"
                                item-text="type_name"
                                item-value="type_name"
                                :items="types"
                                v-on:input="onSelectType"
                                label="Select type"
                                persistent-hint
                        ></v-select>

                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-radio-group v-model="radioGroup">
                            <v-radio

                                    label="Half day"
                                    color="primary"
                                    value="half"
                            ></v-radio>
                            <v-radio

                                    label="Full day"
                                    value="full"
                                    color="primary"
                            ></v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-radio-group v-model="radioGroupAm" v-if="displayAm">
                            <v-radio

                                    label="AM"
                                    color="primary"
                                    value="am"
                            ></v-radio>
                            <v-radio

                                    label="PM"
                                    value="pm"
                                    color="primary"
                            ></v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >

                        <v-btn  color="primary" @click="submit" >Book</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>

    import moment from 'moment';

    export default {

        props: [
          'singleUser'
        ],
        data: () => ({
            radioGroupAm: 'am',
            radioGroup: 'full',
            displayAm: false,
            hApprover: '',
            select: {},
            date: null,
            dateEnd: null,
            menu: false,
            menuEnd: false,
            userId: '',
            min: "1950-01-01",
            type: 'Holiday',
            types:
                [{type_name: 'Holiday'},
                {type_name: 'Sickness'},
                {type_name: 'Others'}],

        }),
        watch: {
            radioGroup(){
                this.displayAm  = this.radioGroup === 'half';
            }
        },

        computed: {

            users(){
               // return this.$store.getters.AllUsers.length > 0 ?  this.$store.getters.AllUsers : [];
                let values= []
                console.log(this.$store.getters.AllUsers);
                this.$store.getters.AllUsers.map(u => {

                    values.push({
                        name: u.name ,
                        user_id: u.user_id,
                        select: {name: u.name +' '+u.surname , id: u.user_id, email: u.email, left: u.holidays_left, approver: u.approver}
                    })
                })
                return values

            },

        },



        methods: {
            onSelectType(selectObj) {
                this.type =  selectObj
            },
            save (date) {
                this.$refs.menu.save(date)
                this.$refs.menuEnd.save(date)
                if(this.date){
                    this.min = this.date
                }
            },
            onSelect(selectObj) {
               this.select =  selectObj
                let userId = this.singleUser ? this.singleUser : this.select.id
                let allusers = this.$store.getters.AllUsers
                let user = _.filter(allusers, {user_id: userId})
                console.log(user);
                let approver = user[0].holiday_approver !== 0 && allusers ?
                    _.filter(allusers, {user_id: user[0].holiday_approver})
                    : ''
                let approverEmail = approver ? approver[0].user_id === userId ? '' : approver[0].email : ''


            },
            submit () {

                let userId = this.singleUser ? this.singleUser : this.select.id
                let allusers = this.$store.getters.AllUsers
                let user = _.filter(allusers, {user_id: userId})
                console.log(user);
                let approver = user[0].holiday_approver !== 0 && allusers ?
                                    _.filter(allusers, {user_id: user[0].holiday_approver})
                                    : ''
                let approverEmail = approver ? approver[0].user_id === userId ? '' : approver[0].email : ''

                this.dateEnd = this.displayAm ? this.date : this.dateEnd
                if(userId && this.date && this.dateEnd) {

                    let data = {
                        email: this.singleUser ? this.$store.getters.companyName.email : this.select.email,
                        name: this.singleUser ? this.$store.getters.companyName.name : this.select.name,
                        user_id : userId,
                        start_date: this.date,
                        end_date: this.dateEnd,
                        count: this.radioGroup === 'full' ? moment(this.dateEnd).diff(moment(this.date), 'days') + 1 : 0.5,
                        approved: this.$store.getters.companyName.is_superuser === 1 ? 'approved' : 'pending',
                        type: this.type,
                        full: this.radioGroup ? this.radioGroup : 'full',
                        amPm: this.radioGroupAm ? this.radioGroupAm : 'am',
                        approverEmail: approverEmail,
                        postUrl: 'holidays/add/',
                        getUrl: 'holidays/company/',
                        commit: 'GET_HOLIDAYS'
                    }
                    console.log(data);
                    return

                    this.$store.commit('MESSAGE', 'Adding...')
                   // this.$store.dispatch('addHoliday', data)
                    this.$store.dispatch('post', data)
                    this.$emit('clicked', false);
                }
            },
            clear(){

            }

        },
        mounted() {
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            this.$store.dispatch('get', data)

        }


    }
</script>