<template>
    <v-container class="pa-0">

        <form>
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                            v-if="allUsers"
                    >
                        <v-select
                                v-model="name"
                                item-text="name"
                                item-value="id"
                                :items="allUsers"
                                v-on:input="onSelect"
                                label="Employees"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-textarea
                                v-model="text"
                                label="Message"
                                :error-messages="textErrors"

                                required
                                @input="$v.text.$touch()"
                                @blur="$v.text.$touch()"
                        ></v-textarea>


                    </v-flex>

                    <v-flex
                            xs12
                            md12
                    >

                        <v-btn  color="primary" @click="submit" >Give kudos</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>
    import { validationMixin } from 'vuelidate'

    import { required,  minLength,sameAs, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {

            text: { required },
        },

        data: () => ({
            text: '',
            name: '',
            sender_id: '',
            receiver_id: '',
            allUsers: ''

        }),


        computed: {

           textErrors () {
                const errors = []
                if (!this.$v.text.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },
            users(){



            },

        },
        watch: {

        },


        methods: {
            onSelect(selectObj) {
                this.receiver_id =  selectObj
            },
            submit () {

                if( this.text !== '' &&   this.receiver_id  !== '' ) {

                    const data  = {
                        text: this.text,
                        sender_id: this.sender_id,
                        receiver_id: this.receiver_id ,

                    }

                    this.$emit('clicked',
                        {message: 'Adding kudos...', dialog: false});
                    this.addKudos(data)
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
            addKudos(kudos)
            {
                let vm = this
                axios.post('/kudos/add', kudos)
                    .then((msg) => {
                        console.log(msg);
                        this.$emit('clicked',
                            {message: 'Kudos has been added', dialog: false});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        mounted(){
            this.sender_id = this.currentUser.id
            axios.get('/employees')
                .then((data) => {
                    console.log(data);
                    this.allUsers =  data.data

                })

                .catch(e => {

                })
        }


    }
</script>