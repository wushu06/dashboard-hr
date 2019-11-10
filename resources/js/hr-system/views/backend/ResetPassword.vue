<template >
    <v-card flat color="transparent" class="subscribe">

        <v-container>
            <h1>Password reset</h1>

            <form @submit.prevent="submit" id="check-register-form">
                <v-text-field
                        v-model="code"
                        :error-messages="codeErrors"
                        label="Rest code"
                        required
                        @input="$v.code.$touch()"
                        @blur="$v.code.$touch()"
                ></v-text-field>
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
        </v-container>
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
            code: { required },


        },
        data: () => ({
            snackbar: false,
            timeout: 8000,
            title: 'Activate',
            reset: '',
            code: '',
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
            codeErrors () {
                const errors = []
                if (!this.$v.code.$dirty) return errors
                !this.$v.code.required && errors.push('Reset code is required')
                return errors
            }
        },

        watch: {
            message (newCount, oldCount) {

                this.snackbar = true
                this.errors = newCount

            }
        },
        methods: {
            submit () {

                const data = {
                    reset_password_code: this.code,
                    password: this.password,
                    password_confirmation: this.password,

                }

                if (this.$v.$invalid) {
                    this.$store.commit('MESSAGE', 'Invalid data.')
                    this.snackbar = true;
                } else {
                    this.$store.commit('MESSAGE', 'Resetting...')
                    this.$store.dispatch('resetPassword', data)

                }


                this.$v.$touch()
            }
        },
        beforeMount(){

        },
        created(){
            this.code = this.$route.params.code



            if(this.reset){
                this.$store.commit('MESSAGE', 'Resetting...')
               // this.$store.dispatch('resetPassword', this.reset)

            }


        }
    }
</script>