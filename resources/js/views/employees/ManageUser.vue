<template>
    <v-container >

        <form class="edit_user">
            <v-container v-if="theUser">
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="First name*"
                                :label="nameLabel"
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
                                v-model="email"
                                :error-messages="emailErrors"
                                :label="emailLabel"

                                name="email"
                                required
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                            v-if="this.isAdmin"
                    >
                        <v-text-field

                                v-model="role"
                                :error-messages="roleErrors"
                                label="Job role*"
                                :label="roleLabel"
                                required
                                @input="$v.role.$touch()"
                                @blur="$v.role.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6
                            v-if="this.isAdmin"
                    >
                        <v-select

                                v-model="department"
                                item-text="name"
                                item-value="id"
                                :items="allDepartments"
                                v-on:input="onSelectDepartment"
                                label="Department"
                                persistent-hint
                        ></v-select>
                    </v-flex>

                    <v-flex
                            xs12
                            md6
                            v-if="this.isAdmin"
                    >
                    <v-text-field

                            v-model="holiday_allowance"
                            label="Holidays allowance"

                    ></v-text-field>

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
                                        v-model="dob"
                                        label="Birthday date"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                    ref="picker"
                                    v-model="dob"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>

                    </v-flex>
                    <v-flex
                            xs12
                            md6
                            v-if="this.isAdmin && this.allUsers"
                    >
                        <v-select
                                v-model="approver"
                                item-text="name"
                                item-value="id"
                                :items="allUsers"
                                v-on:input="onSelectApprover"
                                label="Holiday approver"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                            v-if="this.isAdmin"
                    >


                        <v-label for="">is admin?</v-label>
                        <v-switch v-model="is_admin"  name="is_superuser" :label= "` ${is_admin ? 'Yes' : 'No'}`"  ></v-switch>


                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <label class="profile_upload">
                            Uploda profile image   <v-icon right dark>cloud_upload</v-icon>
                            <input type="file" name="avatar" accept="image/*" @change=" onFileChange($event)" style="display:  none;">

                        </label>
                        <img :src="avatar" width="50" height="50" class="mr-1" v-if="avatar">

                        <span v-if="filename">{{filename}}</span>
                        <span v-if="imgError">{{imgError}}</span>

                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-text-field
                                v-model="address"
                                label="Address"
                                :label="addressLabel"

                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md6

                    >
                        <v-text-field
                                v-model="tel"
                                label="Telephone"
                                :label="telLabel"

                        ></v-text-field>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >

                        <v-btn color="primary" @click="submitEdit" v-if="this.user">Update user</v-btn>
                        <v-btn color="primary" @click="submitAdd" v-else>Add user</v-btn>
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
        props: [
            'user',  'users', 'departments', 'edit'
        ],
        validations: {
            email: { required, email },
            name: { required },
            role: { required },
        },
        data: () => ({
            name: '',
            nameLabel : 'Full name*' ,
            surname: '',
            email: '',
            emailLabel: 'Email*',
            role: '',
            roleLabel: 'Job role*',
            address: '',
            addressLabel: 'Address',
            tel: '',
            telLabel: 'Telephone',
            department: '',
            checked: '',
            is_admin: 0,
            holidays:'',
            holiday_allowance: '',
            dob: '',
            menu: false,
            approver: '',
            allUsers: '',
            allDepartments : '',
            selectedDep: '',
            selectedApprover: '',
            image: '',
            filename: '',
            imgError: '',
            avatar: '',

        }),


        computed: {
            theUser(){

                this.allDepartments = this.departments

                if(this.edit &&  this.user){
                    let user = this.user


                    this.avatar = user.avatar_path ? user.avatar_path  : ''
                    this.name =  user.name ?  user.name : ''
                    this.email =  user.email ?  user.email : ''
                    this.is_admin =  user.is_admin ?  user.is_admin : 0
                    if(user.user_data && user.user_data !== 'undefined') {

                        this.holiday_allowance = user.user_data.holiday_allowance ? user.user_data.holiday_allowance : '';
                        this.department = user.user_data.department ? user.user_data.department : '';
                        this.selectedApprover = user.user_data.approver ? user.user_data.approver : '';
                        this.approver = user.user_data.approver ? user.user_data.approver : '';
                        this.address = user.user_data.address ? user.user_data.address : ''
                        this.tel = user.user_data.tel ? user.user_data.tel : ''
                        this.dob = user.user_data.dob ? user.user_data.dob : ''
                        this.role = user.user_data.role ? user.user_data.role : ''
                    }else{
                        this.holiday_allowance = '';
                        this.department = '';
                        this.selectedApprover =  '';
                        this.approver =  '';
                        this.address = ''
                        this.tel = ''
                        this.dob = ''
                        this.role =  ''
                    }

                    return  user;
                }
                return true

            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                this.$v.valid = errors.length <= 0
                console.log(errors);
                return errors
            },

            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                return errors
            },

            roleErrors () {
                const errors = []
                if (!this.$v.role.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },
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
            onSelectDepartment(selectObj) {
                this.department =  selectObj
            },
            save (date) {
                this.$refs.menu.save(date)

            },
            onFileChange(e) {
                this.filename = ''
                let files = e.target.files || e.dataTransfer.files;
                let types =[ "image/jpeg", "image/png", "image/gif"]
                console.log(types.indexOf(files[0].type) );
                if ( !types.includes(files[0].type)  ) {
                    this.imgError = 'Image type not supported'
                    return;
                }
                if (files[0].size > 3024 * 1024) {
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
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    vm.image = e.target.result;
                    this.avatar =   e.target.result;
                };


            },

            submitEdit () {
                const user = {
                    name: this.name,
                    email: this.email,

                    role: this.role,
                    approver: this.approver,
                    is_admin: this.is_admin ? 1 : 0 ,
                    holiday_allowance: this.holiday_allowance,
                    dob: this.dob,
                    address: this.address,
                    tel: this.tel,
                    department: this.department,
                    avatar: this.image
                }


                this.$emit('clicked', {message: 'Updating user...', dialog: false, dialogType: 'dialogEdit'});
                console.log(user);
                this.editUser( user)
                this.clear()


            },
            submitAdd () {

                let random = Math.random().toString(36).slice(-8)
                const user = {
                    name: this.name,
                    email: this.email,
                    role: this.role,
                    approver: this.approver,
                    is_admin: this.is_admin ? 1 : 0 ,
                    holiday_allowance: this.holiday_allowance,
                    dob: this.date,
                    address: this.address,
                    tel: this.tel,
                    department: this.department,
                    avatar: this.image
                }
                console.log(user);

                if (this.$v.$invalid) {
                    console.log(this.$v);
                    this.message = 'Invalid entry';
                    this.snackbar = true;
                    this.$emit('clicked', {message: 'invalid entry', dialog: true, dialogType: 'dialogAdd'});
                } else {
                    this.$emit('clicked',
                        {message: 'Adding user...', dialog: false, dialogType: 'dialogAdd'});

                    this.addUser( user)
                    this.clear()
                }


                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.holiday_allowance= ''
                this.date = null
                this.dob = ''
                this.role = ''
                this.approver = ''
                this.address = ''
                this.tel = ''
                this.department = ''
            },
            addUser(user)
            {
                axios.post('/employees/create', user)
                    .then((msg) => {
                        this.$emit('clicked',
                            {message: 'User has been create', dialog: false, getUsers: true, dialogType: 'dialogAdd'});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            editUser(user)
            {
                axios.patch('/user/update/'+this.user.id, user)
                    .then((msg) => {
                        this.$emit('clicked', {message: 'User has been updated', dialog: false, getUsers: true, dialogType: 'dialogEdit'});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        beforeMount(){

        },
        mounted(){
            axios.get('/employees')
                .then((data) => {
                    this.allUsers =  data.data

                })

                .catch(e => {

                })

        }

    }
</script>