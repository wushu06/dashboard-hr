<template>
    <v-container>

        <h1>Login </h1>
        <div v-if="redirected">Thank you for registering, Please verify your email.</div>
        <v-alert
                v-model="note"
                type="error"

        >
            Please check your email to activate your account.
        </v-alert>

        <v-form @submit.prevent="submit" id="check-login-form">

            <v-text-field
                    v-model="login_email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.login_email.$touch()"
                    @blur="$v.login_email.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="login_password"
                    :error-messages="passwordErrors"
                    :counter="10"
                    label="password"
                    type="password"
                    required
                    @input="$v.login_password.$touch()"
                    @blur="$v.login_password.$touch()"
            ></v-text-field>



            <v-btn :loading="loading"
                   :disabled="loading" type="submit" color="primary" form="check-login-form" @click="submit">submit</v-btn>


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

        </v-form>
        <p>Don't have an account? <router-link to="/register">Register</router-link></p>
        <p><router-link to="/forgot-password">Forgot password?</router-link></p>
    </v-container>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, email } from 'vuelidate/lib/validators'
    import router from '../router'
    import { mapState, mapGetters } from 'vuex';
    export default {
        mixins: [validationMixin],

        validations: {
            login_password: { required, minLength: minLength(6) },
            login_email: { required, email },

        },

        data: () => ({
            login_password: '',
            login_email: '',
            errors:  '',
            timeout: 6000,
            snackbar: false,
            redirected: '',
            note: false,
            loading: false,
            loader: null,


        }),
        watch: {
            message (newCount, oldCount) {

                // Our fancy notification (2).
                // if(newCount !== oldCount) {
                this.snackbar = true
                this.errors = newCount
                if(newCount === 'user inactive') {
                   this.note = true

                }
                this.loading = false



                // }
            }
        },

        computed: {
            ...mapGetters([
                'message'
            ]),
            passwordErrors () {
                const errors = []
                if (!this.$v.login_password.$dirty) return errors
                !this.$v.login_password.minLength && errors.push('Password must at least 6 characters long')
                !this.$v.login_password.required && errors.push('Password is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.login_email.$dirty) return errors
                !this.$v.login_email.email && errors.push('Must be valid e-mail')
                !this.$v.login_email.required && errors.push('E-mail is required')
                return errors
            },
            token() {

            }
        },

        methods: {
            submit () {
                this.errors  = '';
                const user = new URLSearchParams()
                user.append('login', this.login_email)
                user.append('password', this.login_password)
                if (this.$v.$invalid) {
                    this.$store.state.message = 'Invalid entry';
                    this.snackbar = true;
                } else {
                    this.loading = true
                    this.$store.commit('MESSAGE', 'Processing...')
                    this.$store.dispatch('loginUser', user)
                }
                this.$v.$touch()

            }

        },
        created() {
            this.redirected = this.$route.params.success;
        },
        beforeMount(){

            if(this.$store.getters.token){

                 return router.push({ name: 'profile' })

            }
        }

    }
</script>