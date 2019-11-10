<template>
    <v-container class="pa-0">

        <form>
            <v-container >
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                            v-if="users"
                    >
                        <v-select
                                v-model="supervisor_id"
                                item-text="name"
                                item-value="id"
                                :items="users"
                                v-on:input="onSelect"
                                label="Supervisor"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-text-field
                                v-model="name"
                                label="Department name"
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
                        <v-btn  color="primary" @click="submitEdit" v-if="dep">Update</v-btn>

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
            'dep', 'allUsers'
        ],
        validations: {

           name: { required },
        },

        data: () => ({
            supervisor_id : '',
            name: '',
            users: '',
            id: '',
            currentDep: ''

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
            dep (newvlue, oldvalue){

                    this.name = newvlue.name
                    this.supervisor_id = newvlue.supervisor_id
                    this.id = newvlue.id

            }
        },


        methods: {
            onSelect(selectObj) {
                this.supervisor_id =  selectObj
            },
            submit () {

                if( this.name !== '' &&   this.supervisor_id   !== '' ) {

                    const data  = {
                        name: this.name,
                        supervisor_id: this.supervisor_id

                    }

                    this.$emit('clicked',
                        {message: 'Adding department...', dialog: false});
                    this.addDep(data)
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
            addDep(dep)
            {
                let vm = this
                axios.post('/departments/add', dep)
                    .then((msg) => {
                        console.log(msg);
                        this.$emit('clicked',
                            {message: 'Department has been created', dialog: false, getDepartments: true, dialogType: 'dialogAdd'});
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            submitEdit(){
                const data  = {
                    name: this.name,
                    supervisor_id: this.supervisor_id
                }

                this.$emit('clicked',
                    {message: 'Editing department...', dialog: false});
                this.editDep(data)
                this.clear()
            },
            editDep(data) {
                axios.patch('/departments/update/'+this.id, data)
                    .then((msg) => {
                        this.$emit('clicked',
                            {message: 'Department has been updated', dialog: false, getDepartments: true, dialogType: 'dialogEdit'});

                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        beforeMount(){

        },

        mounted(){
            if(this.dep) {

                this.name = this.dep.name
                this.supervisor_id = this.dep.supervisor_id
                this.id = this.dep.id
            }
            this.users = this.allUsers

        }


    }
</script>