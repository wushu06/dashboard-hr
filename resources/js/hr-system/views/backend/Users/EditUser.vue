<template>
    <v-container>

        <form class="edit_user">
            <v-container>
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md6
                    >

                        <v-text-field
                    v-model="name"
                    :label="`First name: ${user.name}`"
            ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
            <v-text-field
                    v-model="surname"
                    :label="`Last name: ${user.surname}`"

            ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
            <v-text-field
                    v-model="email"
                    :label="`Email: ${user.email}`"
                    name="email"

            ></v-text-field>

                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
                        <v-text-field
                                v-model="role"
                                :label="`Role: ${user.role ? user.role : ''}`"

                        ></v-text-field>

                    </v-flex>

                    <v-flex
                            xs12
                            md6
                            pa-10
                    >
                        <v-text-field
                                v-model="holidays"
                                :label="`Holidays: ${user.holidays ? user.holidays : 0}`"
                                required

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
                                :label="`Holiday approver: ${user.holiday_approver ? hApprover : ''}`"
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
                                :label="`Supervisor: ${user.supervisor  ? uSupervisor : ''}`"
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
                                        :label="`Birthday date: ${user.dob ? user.dob : '--/--/--' }`"
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
                            md6
                    >
            <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="password"
                    type="password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
            ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                    >
            <v-text-field
                    v-model="repeatPassword"
                    :error-messages="repeatPasswordErrors"
                    label="Confirm password"
                    type="password"
                    required
                    @input="$v.repeatPassword.$touch()"
                    @blur="$v.repeatPassword.$touch()"
            ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        {{checkAdmin}}

                        <br>
                        <v-label for="">is admin?</v-label>
                        <v-switch v-model="checked"  name="is_superuser" :label= "` ${checked ? 'Yes' : 'No'}`"  ></v-switch>


                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <label class="profile_upload">
                            Uploda profile image   <v-icon right dark>cloud_upload</v-icon>
                            <input type="file" accept="image/*" @change=" onFileChange($event)" style="display:  none;">

                        </label>


                        <span v-if="filename">{{filename}}</span>
                        <span v-if="imgError">{{imgError}}</span>

                    </v-flex>
                        <v-flex
                            xs12
                            md12
                    >

            <v-btn
                   color="primary" @click="submit" >Update</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
<script>
    import { validationMixin } from 'vuelidate'
    import axios from 'axios'
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
            email: {  email },
            name: '',
            surname: '',
            holidays: '',



        },

        data: () => ({
            name: '',
            surname: '',
            holidays: '',
            email: '',
            password: '',
            repeatPassword: '',
            checked: '',
            date: null,
            menu: false,
            image: '',
            filename: '',
            role: '',
            approver: '',
            supervisor: '',
            hApprover : '',
            uSupervisor: '',
            imgError: '',




        }),


        computed: {

            users(){
                let h = _.filter(this.$store.getters.AllUsers, {user_id: this.user.holiday_approver})
                this.hApprover = h.length > 0 ? h[0].user_name : ''

                let s = _.filter(this.$store.getters.AllUsers, {user_id: this.user.supervisor})
                this.uSupervisor = s.length > 0 ? s[0].user_name : ''

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
            },
            checkAdmin(){
                 this.checked = this.user.is_superuser === 1
            },
        },
        watch: {
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

            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            },
            onFileChange(e) {
                this.filename = ''
                let files = e.target.files || e.dataTransfer.files;
                let types =[ "image/jpeg", "image/png"]
                console.log(types.indexOf(files[0].type) );
                if ( !types.includes(files[0].type)  ) {
                    this.imgError = 'Image type not supported'
                    return;
                }
                if (files[0].size > 3024 * 1024) {
                    console.log('too');
                    this.imgError = 'Image too large'
                    return;
                }

                if (!files.length)
                    return;
                this.createImage(files[0]);

            },
            createImage(file) {
                let reader = new FileReader();
                this.filename = file.name;
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            upload(){
                axios.post(`http://hr-system.localhost/cms/test/${this.$store.getters.companyName.company_name}`,{image: this.image}).then(response => {
                });
            },
            save (date) {
                this.$refs.menu.save(date)
            },
            submit () {


                let admin = this.user.is_superuser === 1

                this.$emit('clicked', false);
                let holiday;
                if( this.holidays && this.user.holidays) {
                    holiday = this.holidays === this.user.holiday ? '' : this.holidays
                }else if(!this.holidays|| !this.user.holidays){
                    holiday = this.holidays ? this.holidays : this.user.holidays
                }else{
                    holiday = ''
                }
                let dob;
                if( this.date && this.user.DOB) {
                    dob = this.date === this.user.DOB ? '' : this.date
                }else if(!this.date || !this.user.DOB){
                    dob = this.date ? this.date : this.user.DOB
                }else{
                    dob = ''
                }
                let user_data = {
                    id: this.user.user_id,
                    name: this.name === this.user.name ? '' : this.name ,
                    surname: this.surname === this.user.surname ? '' : this.surname,
                    email: this.email === this.user.email ? '' : this.email,
                    password: this.password !=='' && this.repeatPassword !== '' ? this.password : '',
                    holidays:  holiday ,
                    role: this.role ? this.role: '',
                    approver: this.approver ? this.approver : '',
                    supervisor: this.supervisor ? this.supervisor : '',
                    is_superuser: this.checked === admin || this.checked === '' ? '' : this.checked ,
                    DOB: dob,
                    image: this.image !== '' ? this.image : '',
                    imageName: this.image !== '' && this.image ? this.$store.getters.companyName.company_name+'-'+this.user.name+this.user.id: ''

                }

                let check = Object.values(user_data).some(u => {
                   return u !== ''
                })
                if(check) {
                    user_data['company_name'] =  this.$store.getters.companyName.company_name;
                    this.$store.commit('MESSAGE', 'Updating...')
                    this.$store.dispatch('editUser', user_data)
                    this.clear();


                }else{
                }



            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.surname = ''
                this.email = ''
                this.password = ''
                this.repeatPassword = ''
                this.holidays = ''
                this.date = ''
            }

        },
        beforeMount(){

            if(this.$store.getters.token){

                //  return router.push({ name: 'profile' })

            }
        }

    }
</script>