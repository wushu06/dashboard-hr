<template>
    <v-container>
        <h1>Register </h1>


        <form @submit.prevent="submit" id="check-register-form">
            <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="First name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="surname"
                    :error-messages="surnameErrors"
                    label="Last name"
                    required
                    @input="$v.surname.$touch()"
                    @blur="$v.surname.$touch()"
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    name="email"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="company"
                    :error-messages="companyErrors"
                    label="Company name"
                    required
                    @input="$v.company.$touch()"
                    @blur="$v.company.$touch()"
            ></v-text-field>


            <v-btn :loading="loading"
                   :disabled="loading" color="primary" form="check-register-form"  @click="submit" >Register</v-btn>

        </form>
        <p>Already have an account? <router-link to="/login">login</router-link></p>
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
<script>
    import { validationMixin } from 'vuelidate'
    import router from '../router'
    import { mapState, mapGetters } from 'vuex';

    import { required,  minLength,sameAs, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {

            email: { required, email },
            name: { required },
            company: { required },
            surname: { required },

        },

        data: () => ({
            name: '',
            surname: '',
            company: '',
            email: '',
            password: '',
            repeatPassword: '',
            errors:  '',
            snackbar: false,
            y: 'bottom',
            x: null,
            mode: '',
            timeout: 8000,
            redirect: false,
            loading: false,
            loader: null,

        }),


        computed: {
            ...mapGetters([
                'message'
            ]),


            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Name is required.')
                this.$v.valid = errors.length <= 0
                return errors
            },
            surnameErrors () {
                const errors = []
                if (!this.$v.surname.$dirty) return errors
                !this.$v.surname.required && errors.push('Last name is required.')
                return errors
            },
            companyErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Company name is required.')
                this.$v.valid = errors.length <= 0
                return errors
            },

            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },
        watch: {
            message (newCount, oldCount) {

                // Our fancy notification (2).
                // if(newCount !== oldCount) {
                this.snackbar = true
                this.loading = false
                if(newCount === 'Account has been creared successfully') {
                    this.clear()
                    router.push({ name: 'login',params: { success: true }})
                }

                // }
            }
        },


        methods: {
            submit () {
                let random = Math.random().toString(36).slice(-8)

                const user = {
                    name: this.name,
                    surname: this.surname,
                    company_name: this.company,
                    email: this.email,
                    password: random,
                    password_confirmation: random,
                    is_superuser: 1,
                    creator: true
                }


/*
                 for (let p of user) {
                     console.log( p[1]);
                 }*/

                if (this.$v.$invalid) {
                    this.$store.commit('MESSAGE', 'Invalid data.')
                    this.snackbar = true;
                } else {
                    this.loading = true
                    this.$store.commit('MESSAGE', 'Registering...')
                    this.$store.dispatch('registerUser', user)

                }


                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.surname = ''
                this.email = ''
                this.password = ''
                this.company = ''
                this.repeatPassword = ''
                return router.push({ name: 'login',params: { success: true }})
            }
        },
        beforeMount(){

            if(this.$store.getters.token){

                return router.push({ name: 'profile' })

            }
        }

    }
</script>