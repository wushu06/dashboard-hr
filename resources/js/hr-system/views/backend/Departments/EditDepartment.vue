<template>
    <v-container>

        <form>

            <v-container class="pa-0">
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
                                    v-model="departmentName"
                                    :label="`Department name: ${department.department_name}`"

                            ></v-text-field>
                        </v-flex>

                        <v-select
                                item-text="user_name"
                                item-value="user_id"
                                :items="users"
                                v-on:input="onSelect"
                                :label="`Head of Department: ${department.user_name ? department.user_name : ''}`"
                                persistent-hint
                        ></v-select>
                    </v-flex>
                    <v-flex
                            xs12
                            md12
                    >
                  
                        <v-select
                                v-model="depEmployees"
                                item-text='user_name'
                                item-value="user_id"
                                :items="allUsers"
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

                        <v-btn  color="primary" @click="submit" >Update</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>

    </v-container>
</template>
<script>
    import moment from 'moment';

    export default  {
        props: [
            'department'
        ],
        data: () => ({
            departmentName: '',
            headId: '',
            depEmployees: [],
            employees: [],
            items: [],
            values: [],
            allUsers: ''
        }),

        computed: {
            dep(){
                let values = []
                if (this.department.employees && this.department.employees!=='' ){


                    let x = this.department.employees.split(';')

                    x.map(s => {
                        values.push({
                            user_id: s.split(',')[0].toString(),
                            name: s.split(',')[1]
                        })
                    })



                }else{
                    values = []
                }
                return values
            },
            users() {
                let users = this.$store.getters.AllUsers
                this.allUsers = users
                let g = _.groupBy(users, 'department_id');
                let key = this.department.id
                this.depEmployees = g[key];



                return users


            }
        },
        methods: {
            splitting(obj){
                let values = []
                if(obj && obj !=='') {

                    let x = obj.split(';')

                    x.map(s => {
                        values.push(
                            s.split(',')[0].toString()
                        )
                    })
                }
                return values;
            },
            onSelect(selectObj) {
                this.headId =  selectObj
            },
            onSelectMultiple(selectObj) {
                this.employees = selectObj.map(Number)
            },

            /*submit () {

                if(!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0){

                    console.log('not eql');
                }

                if(
                    (this.headId && this.headId !== this.department.head_id) ||
                    (this.departmentName  && this.departmentName !== this.department.name) ||
                    (!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0)
                ) {
                    let data = {
                        id:this.department.id ,
                        head:  (this.headId && this.headId !== this.department.head_id) ? Number(this.headId) : '',
                        department_name:  (this.departmentName  && this.departmentName !== this.department.name) ? this.departmentName : '',
                        employees: (!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0) ? this.employees : ''
                    }

                    this.$store.dispatch('editDepartment', data)
                    this.$emit('clicked', false);
                    this.clear()
               } */
               submit () {
                   let values = [this.department.head_id]
                   let users = this.$store.getters.AllUsers
                   this.allUsers = users
                   let g = _.groupBy(users, 'department');

                   g[this.department.department_name] && Object.values(g[this.department.department_name]).map(u => {
                      values.push(u.user_id)
                  })



                if(
                    (this.headId && this.headId !== this.department.head_id) ||
                    (this.departmentName  && this.departmentName !== this.department.name) ||
                    (  this.employees.length > 0)
                ) {
                    let data = {
                        id: this.department.id ,
                        head:  this.headId  ? Number(this.headId) : this.department.head_id,
                        department_name:  this.departmentName !== '' ? this.departmentName : this.department.department_name  ,
                        employees:  this.employees.length > 0 ? this.employees : values, // to be converted to array
                        old_head: this.department.head_id,

                        postUrl: 'departments/edit/'+this.department.id,
                        getUrl: 'departments/company/',
                        commit: 'GET_DEPARTMENTS'
                    }

                    this.$store.commit('MESSAGE', 'Updating...')

                    this.$store.dispatch('post', data)
                    this.$emit('clicked', false);
                    this.clear()
               }

            },
            clear(){

            }

        },
        created(){




            //return items;



        }

    }
</script>