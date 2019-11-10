<template>
    <v-container class="pa-0">

        <form>

            <v-container>
                <v-layout row wrap>
                    <v-flex
                            xs12
                            md12
                            class="pa-0"
                    >
                        <v-flex
                                xs12
                                md6
                        >
                            <v-text-field
                                    v-model="name"
                                    :error-messages="nameErrors"
                                    label="Department name"
                                    name="name"
                                    required
                                    @input="$v.name.$touch()"
                                    @blur="$v.name.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-select
                                v-model="head"
                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
                                v-on:input="onSelect"
                                label="Head of department"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                        <v-select

                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
                                attach
                                chips
                                label="Employees"
                                multiple
                                v-on:input="onSelectMultiple"
                        ></v-select>

                    </v-flex>

                    <v-flex
                            xs12
                            md12
                    >

                        <v-btn  color="primary" @click="submit" >Add</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>
    import { required,  minLength,sameAs, email } from 'vuelidate/lib/validators'
    import { validationMixin } from 'vuelidate'
    import _ from 'lodash'

    export default {
        mixins: [validationMixin],
        props: [
          'singleUser'
        ],
        validations: {

            name: { required },

        },
        data: () => ({
            name: '',
            userId: '',
            company_id: '',
            employees: {},
            head: ''
        }),
        watch: {

        },

        computed: {
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                this.$v.valid = errors.length <= 0
                return errors
            },
            users(){
                let users = this.$store.getters.AllUsers
                let values = []
                users.map(u => {
                    values.push({
                        name: u.user_name,
                        user_id: u.user_id,
                        select: {name: u.name +' '+u.surname , id: u.user_id, email: u.email},
                        department: u.department
                    })
                })


              //  let g = _.filter(values, {department_id: 0});
               // return g;

                return this.$store.getters.AllUsers.length > 0 ?  this.$store.getters.AllUsers : [];


            },

        },
        methods: {
            onSelect(selectObj) {
                this.userId =  selectObj
            },
            onSelectMultiple(selectObj) {
                this.employees = selectObj

            },
            submit () {
                let userId =  this.userId
                let all = this.employees
                all.push(userId)
                if(this.userId && this.name) {
                    let data = {
                        head : userId,
                        department_name: this.name,
                        company_id: this.company_id,
                        employees: all,

                        postUrl: 'departments/add',
                        getUrl: 'departments/company/',
                        commit: 'GET_DEPARTMENTS'
                    }

                    this.$store.commit('MESSAGE', 'Adding...')

                    this.$store.dispatch('post', data)
                    this.$emit('clicked', false);
                    this.clear()
                }
            },
            clear(){
                this.name = ''
                this.employees = {}
                this.head= ''

            }

        },
        mounted() {
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            this.$store.dispatch('get', data)
            this.company_id = this.$store.getters.companyName.company_id
        }


    }
</script>