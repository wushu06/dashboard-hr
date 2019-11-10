<template>
    <v-container class="pa-0">

        <form>
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                            v-if="deps"
                    >
                        <v-select
                                v-model="department_id"
                                item-text="name"
                                item-value="id"
                                :items="deps"
                                v-on:input="onSelect"
                                label="Departments"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-text-field
                                v-model="name"
                                label="Role name"
                                :error-messages="nameErrors"

                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>


                    </v-flex>

                    <v-flex
                            xs12
                            md12
                    >
                        <v-btn  color="primary" @click="submitEdit" v-if="role">Update</v-btn>

                        <v-btn  color="primary" @click="submit" v-else >Create</v-btn>
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
            'role', 'allDep'
        ],
        validations: {

           name: { required },
        },

        data: () => ({
            department_id : '',
            name: '',
            deps: '',
            id: '',
            currentRole: ''

        }),


        computed: {

           nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },

        },
        watch: {
            role (newvlue, oldvalue){

                    this.name = newvlue.name
                    this.department_id = newvlue.department_id
                    this.id = newvlue.id

            }
        },


        methods: {
            onSelect(selectObj) {
                this.department_id =  selectObj
            },
            submit () {

                if( this.name !== '' &&   this.department_id   !== '' ) {

                    const data  = {
                        name: this.name,
                        department_id: this.department_id

                    }

                    this.$emit('clicked',
                        {message: 'Adding role...', dialog: false});
                    this.addRole(data)
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
            addRole(role)
            {
                let vm = this
                axios.post('/roles/add', role)
                    .then((msg) => {
                        console.log(msg);
                        this.$emit('clicked',
                            {message: 'Role has been created', dialog: false, getRoles: true, dialogType: 'dialogAdd'});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            submitEdit(){
                const data  = {
                    name: this.name,
                    department_id: this.department_id
                }

                this.$emit('clicked',
                    {message: 'Editing role...', dialog: false});
                this.editRole(data)
                this.clear()
            },
            editRole(data) {
                axios.patch('/roles/update/'+this.id, data)
                    .then((msg) => {
                        this.$emit('clicked',
                            {message: 'Role has been updated', dialog: false, getRoles: true, dialogType: 'dialogEdit'});

                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        beforeMount(){

        },

        mounted(){
            if(this.role) {

                this.name = this.role.name
                this.department_id = this.role.department_id
                this.id = this.role.id
            }
            this.deps = this.allDep

        }


    }
</script>