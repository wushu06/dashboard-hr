<template >
    <v-card flat color="transparent" class="subscribe">

        <v-container>
            <h1>Account activation</h1>


        <form @submit.prevent="submit" id="check-register-form">
            <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="password"
                    type="password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="repeatPassword"
                    :error-messages="repeatPasswordErrors"
                    label="Confirm password"
                    type="password"
                    required
                    @input="$v.repeatPassword.$touch()"
                    @blur="$v.repeatPassword.$touch()"
            ></v-text-field>


            <v-btn color="primary" form="check-register-form"  @click="submit" >Reset password</v-btn>

        </form>
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
    </v-card>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';
    import { required,  minLength,sameAs } from 'vuelidate/lib/validators'

    import { validationMixin } from 'vuelidate'

    export default {
        mixins: [validationMixin],

        validations: {
            password: { required,  minLength: minLength(6) },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            },


        },

        data: () => ({
            snackbar: false,
            timeout: 8000,
            title: 'Activate',
            code: '',
            reset: '',
            id: '',
            password: '',
            repeatPassword: '',
        }),
        computed: {
            ...mapGetters([
                'message'
            ]),
            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.minLength && errors.push('Password must be at most 6 characters long')
                !this.$v.password.required && errors.push('Password is required.')
                return errors
            },
            repeatPasswordErrors () {
                const errors = []
                if (!this.$v.repeatPassword.$dirty) return errors
                !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match')
                return errors
            },

        },

        watch: {
            message (newCount, oldCount) {

                this.snackbar = true
                this.errors = newCount

            },

        },
        methods: {
            submit () {

                const data = {
                    id: this.id,
                    password: this.password,
                    password_confirmation: this.password,

                }

                if (this.$v.$invalid) {
                    this.$store.commit('MESSAGE', 'Invalid data.')
                    this.snackbar = true;
                } else {
                    this.$store.commit('MESSAGE', 'Resetting...')
                    this.$store.dispatch('setPassword', data)

                }


                this.$v.$touch()
            }


        },
        beforeMount(){

        },
        created(){
            this.code = this.$route.params.code
            this.reset = this.$route.query.reset

            this.id = (this.$route.params.code).substr(0, this.$route.params.code.indexOf('!'));
            console.log(this.id);


            //this.$store.commit('MESSAGE', 'Activating...')
            if(this.code){
                this.$store.dispatch('activateUser', this.code)
            }

        }
    }
</script>