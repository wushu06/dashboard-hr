<template>
    <v-container class="pa-0">

        <form>

            <v-container>
                <v-layout row wrap>
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
                                        :label="format(holiday.start_date)"
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
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="dateEnd"
                                        :label="format(holiday.end_date)"
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

                        <v-btn  color="primary" @click="submit" >Update</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>
    import moment from 'moment';

    export default  {
        props: [
            'holiday'
        ],
        data: () => ({
            date: null,
            dateEnd: null,
            menu: false,
            menuEnd: false,

            min: "1950-01-01"
        }),
        methods: {
            format(date){
                return moment(date).format('YYYY-MM-DD');
            },
            save (date) {
                this.$refs.menu.save(date)
                this.$refs.menuEnd.save(date)
                if(this.date){
                    this.min = this.date
                }

            },

            submit () {

                if((this.date && this.date !== this.holiday.start_date) || (this.dateEnd  && this.dateEnd !== this.holiday.end_date)) {
                    let s = this.date ? this.date : this.holiday.start_date
                    let e = this.dateEnd ? this.dateEnd : this.holiday.end_date
                    let c =  moment(e).diff(moment(s), 'days')
                    if(c < 0){
                        this.$store.state.message = 'Invalid entry';
                        return;
                    }
                    let data = {
                        id: this.holiday.id,
                        user_id: this.holiday.user_id,
                        start_date:s ,
                        end_date: e,
                        count: moment(e).diff(moment(s), 'days'),

                        postUrl: 'requests/edit/'+this.holiday.id,
                        getUrl: 'holidays/company/',
                        commit: 'GET_HOLIDAYS'
                    }


                   // this.$store.dispatch('editHoliday', data)
                    this.$store.dispatch('post', data)
                    this.$emit('clicked', false);
                    this.clear()
                }

            },
            clear(){

            }

        },

    }
</script>