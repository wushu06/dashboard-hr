<template>
    <v-container >

        <form class="edit_user">
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="First name"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
                        <v-text-field
                                v-model="surname"
                                :error-messages="surnameErrors"
                                label="Last name"
                                required
                                @input="$v.surname.$touch()"
                                @blur="$v.surname.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
                        <v-text-field
                                v-model="email"
                                :error-messages="emailErrors"
                                label="E-mail"
                                name="email"
                                required
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
                        <v-text-field
                                v-model="role"
                                label="Role"

                        ></v-text-field>

                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
                    <v-text-field
                            v-model="holidays"
                            label="Holidays"

                    ></v-text-field>

                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-select

                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
                                v-on:input="onSelectApprover"
                                label="Holiday approver"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-select

                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
                                v-on:input="onSelectSupervisor"
                                label="Supervisor"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
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
                                        label="Birthday date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>

                    </v-flex>


                    <v-flex
                            xs12
                            md12
                    >


                        <v-label for="">is admin?</v-label>
                        <v-switch v-model="checked"  name="is_superuser" :label= "` ${checked ? 'Yes' : 'No'}`"  ></v-switch>


                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >

                        <v-btn  color="primary" @click="submit" >Add user</v-btn>
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
        props: [
            'user'
        ],
        validations: {
            password: {   minLength: minLength(6) },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            },
            email: { required, email },
            name: { required },
            surname: { required },





        },

        data: () => ({
            name: '',
            surname: '',
            email: '',
            role: '',
            checked: '',
            holidays:'',
            date: null,
            menu: false,
            approver: '',
            supervisor: ''

        }),


        computed: {
            users(){

                return this.$store.getters.AllUsers;


            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },
            surnameErrors () {
                const errors = []
                if (!this.$v.surname.$dirty) return errors
                return errors
            },

            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.minLength && errors.push('Password must be at most 6 characters long')
                return errors
            },
            repeatPasswordErrors () {
                const errors = []
                if (!this.$v.repeatPassword.$dirty) return errors
                !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                return errors
            }
        },
        watch: {
            message (newCount, oldCount) {

                // Our fancy notification (2).
                // if(newCount !== oldCount) {
                this.snackbar = true
                this.errors = newCount


                // }
            },
            menu (val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },


        methods: {
            onSelectApprover(selectObj) {
                this.approver =  selectObj
            },
            onSelectSupervisor(selectObj) {
                this.supervisor =  selectObj
            },
            save (date) {
                this.$refs.menu.save(date)

            },
            submit () {
                this.$emit('clicked', false);

                let company = this.$store.getters.companyName
                let random = Math.random().toString(36).slice(-8)
                const user = {
                    name: this.name,
                    surname: this.surname,
                    company_name: company.company_name,
                    email: this.email,
                    password: random,
                    password_confirmation: random,
                    is_superuser: this.checked ? 1 : 0 ,
                    holidays: this.holidays,
                    role: this.role,
                    DOB: this.date,
                    creator: false,
                    company_id: company.company_id,
                    approver: this.approver,
                    supervisor: this.supervisor
                }

                if (this.$v.$invalid) {
                    this.message = 'Invalid entry';
                    this.snackbar = true;
                } else {
                    this.$store.commit('MESSAGE', 'Adding...')
                    this.$store.dispatch('addUser', user)
                    this.clear()
                }


                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.surname = ''
                this.email = ''
                this.role = ''
                this.holidays= ''
                this.date = null
                this.DOB = ''
                this.company = ''
            }

        },
        beforeMount(){

            if(this.$store.getters.token){

                //  return router.push({ name: 'profile' })

            }
        }

    }
</script>