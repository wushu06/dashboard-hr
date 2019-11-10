<template>
    <v-container class="pa-0">

        <form>
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                    >
                        <v-select
                                v-model="username"
                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
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
                                v-model="message"
                                label="Message"
                                :error-messages="messageErrors"

                                required
                                @input="$v.message.$touch()"
                                @blur="$v.message.$touch()"
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
    import { mapState, mapGetters } from 'vuex';

    import { required,  minLength,sameAs, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {

            message: { required },
        },

        data: () => ({
            message: '',
            username: '',
            sender: ''

        }),


        computed: {

            messageErrors () {
                const errors = []
                if (!this.$v.message.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },
            users(){
                let c = this.$store.getters.companyName.user_id
                let f = _.filter(this.$store.getters.AllUsers, function(n) {
                    return n.user_id !== c;
                });


                return f;


            },

        },
        watch: {
            message (newCount, oldCount) {

                // Our fancy notification (2).
                // if(newCount !== oldCount) {
                this.snackbar = true
                this.errors = newCount


                // }
            }
        },


        methods: {
            onSelect(selectObj) {
                this.sender =  selectObj
            },
            submit () {

                if( this.message !== '' &&   this.sender !== '' ) {

                    const data  = {
                        message: this.message,
                        user_id: this.sender,
                        company_id: this.$store.getters.companyName.company_id,
                        sender: this.$store.getters.companyName.user_id,

                        postUrl: 'kudos/add',
                        getUrl: 'kudos/company/',
                        commit: 'GET_KUDOS'
                    }

                    this.$store.commit('MESSAGE', 'Adding...')
                   // this.$store.dispatch('addKudos', data)
                    this.$store.dispatch('post', data)
                    this.$emit('clicked', false);
                    this.clear()
                }

                    if (this.$v.$invalid) {
                        this.message = 'Invalid entry';
                        this.snackbar = true;
                    }
                    this.$v.$touch()

            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.surname = ''
                this.email = ''
                this.holiday= ''
                this.date = null
                this.DOB = ''
                this.password = ''
                this.company = ''
                this.repeatPassword = ''
            }

        }


    }
</script>