<template>
    <v-container class="pa-0">

        <form>
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                            v-if="users"
                    >
                        <v-select
                                v-model="user_id"
                                item-text="name"
                                item-value="id"
                                :items="users"
                                v-on:input="onSelect"
                                label="Employee"
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

                                transition="scale-transition"
                                offset-y

                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="start_date"
                                        label="Start date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                    ref="picker"
                                    v-model="start_date"
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

                                transition="scale-transition"
                                offset-y

                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }" >
                                <v-text-field
                                        v-model="end_date"
                                        label="End date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker

                                    v-model="end_date"
                                    :min="min"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>

                    <v-flex
                            xs12
                            md12
                    >
                        <v-btn  color="primary" @click="submitEdit" v-if="holiday">Update</v-btn>

                        <v-btn  color="primary" @click="submit" v-else >Create</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import moment from 'moment'


    export default {
        mixins: [validationMixin],
        props: [
            'holiday', 'users'
        ],
        validations: {


        },

        data: () => ({
            user_id : '',
            id: '',
            currentDep: '',
            start_date: null,
            end_date: null,
            menu: false,
            menuEnd: false,
            userId: '',
            min: "1950-01-01",

        }),


        computed: {


        },
        watch: {
            holiday (newValue, oldValue){
               this.getCurrentHoliday(newValue)
            }
        },


        methods: {
            getCurrentHoliday(current){

                this.start_date = moment(current.start_date).format('YYYY-MM-DD')
                this.end_date = moment(current.end_date).format('YYYY-MM-DD')
                this.user_id = current.user_id
                this.id = current.id
                this.min = this.start_date


            },
            save (date) {
                this.$refs.menu.save(date)
                this.$refs.menuEnd.save(date)
                if(this.start_date){
                    this.min = this.start_date
                }
            },
            onSelect(selectObj) {
                this.user_id =  selectObj
            },
            submit () {

                if(    this.user_id   !== '' ) {

                    const data  = {
                        start_date: moment(this.start_date).format('YYYY-MM-DD HH:mm:ss'),
                        end_date: moment(this.end_date).format('YYYY-MM-DD HH:mm:ss'),
                        user_id: this.user_id

                    }

                    this.$emit('clicked',
                        {message: 'Adding holiday...', dialog: false});
                    this.addHoliday(data)
                    this.clear()
                }

                if (this.$v.$invalid) {

                    this.$emit('clicked',
                        {message: 'Invalid entry', dialog: true});
                }
                this.$v.$touch()

            },
            clear () {
                this.$v.$reset()

            },
            addHoliday(holiday)
            {

                let vm = this
                axios.post('/holiday/add', holiday)
                    .then((data) => {
                        let message = data.data ==='' ? 'Something went wrong!' : 'Holiday has been created'
                        this.$emit('clicked',
                            {message: message, dialog: false, getHolidays: true, dialogType: 'dialogAdd'});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            submitEdit(){
                const data  = {
                    start_date: moment(this.start_date).format('YYYY-MM-DD HH:mm:ss'),
                    end_date: moment(this.end_date).format('YYYY-MM-DD HH:mm:ss'),
                    user_id: this.user_id

                }

                this.$emit('clicked',
                    {message: 'Editing holiday...', dialog: false});
                this.editHoliday(data)
                this.clear()
            },
            editHoliday(data) {
                axios.patch('/holiday/update/'+this.id, data)
                    .then((data) => {
                        console.log(data);
                        let message = data.data ==='' ? 'Something went wrong!' : 'Holiday has been updated.'

                        this.$emit('clicked',
                            {message: message, dialog: false, getHolidays: true, dialogType: 'dialogEdit'});

                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        beforeMount(){

        },

        mounted(){
            if(this.holiday){
                this.getCurrentHoliday(this.holiday)

            }
        }


    }
</script>