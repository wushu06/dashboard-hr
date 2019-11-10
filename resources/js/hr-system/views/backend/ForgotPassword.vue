<template >
    <v-card flat color="transparent" class="subscribe">

        <v-container>
            <h1>Forgot password</h1>
            <v-form @submit.prevent="submit" id="check-login-form">

                <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                ></v-text-field>
                <v-btn type="submit" color="primary" form="check-login-form" @click="submit">submit</v-btn>
            </v-form>
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
    import { validationMixin } from 'vuelidate'
    import { required, minLength, email } from 'vuelidate/lib/validators'
    import { mapState, mapGetters } from 'vuex';


    export default {
        mixins: [validationMixin],

        validations: {
            email: { required, email },

        },
        data: () => ({
            snackbar: false,
            timeout: 8000,
            title: 'Activate',
            forgot: '',
            email: '',
        }),
        computed: {
            ...mapGetters([
                'message'
            ]),
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },

        },

        watch: {
            message (newCount, oldCount) {

                this.snackbar = true
                this.errors = newCount

            }
        },
        methods: {
            submit () {
                this.errors  = '';
                const user = {email: this.email}

                if (this.$v.$invalid) {
                    this.$store.state.message = 'Invalid entry';
                    this.snackbar = true;
                } else {
                    this.$store.commit('MESSAGE', 'Resetting...')
                    this.$store.dispatch('forgotPassword', user)
                }
                this.$v.$touch()

            }
        },
        beforeMount(){

        },
        created(){


        }
    }
</script>