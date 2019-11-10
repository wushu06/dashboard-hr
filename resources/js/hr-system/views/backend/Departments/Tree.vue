<template>
    <v-layout row class="department_tree">
        <v-flex xs12 >
            <TreeChart :json="treeData" />

        </v-flex>
    </v-layout>
</template>

<script>

    import moment from 'moment';
    import TreeChart from "vue-tree-chart";

    import _ from 'lodash'

    export default {

        data: () => ({
            id: '',
            name: '',
            user: '',
            currentUser:0,
            department: '',
            is_superuser: '',
            departmentName: '',


        }),
        components: {
            TreeChart
        },
        watch: {

        },
        computed: {

            treeData(){

                let children = []
                let users = this.$store.getters.AllUsers

                let g = _.groupBy(users, 'department');
                let values = []
                let o = []
                Object.values(g).map(ga => {

                    ga.map(v => {
                        o.push({
                            name: v.user_name,
                            image_url: v.avatar ? v.avatar : "https://static.refined-x.com/avat1.jpg",
                            department: v.department
                        })

                    })

                })
                let ng = _.groupBy(o, 'department')

                Object.keys(ng).map(k => {
                   /* children.push( {
                        name: k,
                        image_url: "https://static.refined-x.com/avat1.jpg",
                        children: ng[k]
                    })*/


                })
                let dep =  this.$store.getters.departments.length > 0 ? this.$store.getters.departments : []


                dep.map(h=> {

                    let ud = []
                    users.map(u => {

                        if(u.department_id === h.id && h.head_id !== u.user_id ){
                            ud.push({
                                name: u.user_name,
                                image_url: u.avatar ? u.avatar : require("@/assets/images/profile.svg"),
                            })
                        }
                    })
                   ud.length > 0 ? children.push( {
                        name: h.department_name +'(' + h.user_name +')',
                        image_url: h.avatar ? h.avatar : require("@/assets/images/profile.svg"),
                        children: ud

                    }) : children.push( {
                       name: h.department_name +'(' + h.user_name +')',
                       image_url: h.avatar ? h.avatar : require("@/assets/images/profile.svg"),


                   })

                })


                let tree = {
                    name: this.$store.getters.companyName.company_name,
                    image_url: require("@/assets/images/enterprise.svg"),
                    children
                }
                return tree

            }
        },

        methods: {



        },
        beforeMount(){
            this.$store.dispatch('checkToken');
            this.is_superuser = this.$store.getters.companyName.is_superuser
            this.currentUser =   this.$store.getters.user.id
        },
        mounted() {
            let data = {
                getUrl: 'departments/company/',
                commit: 'GET_DEPARTMENTS'
            }
            this.$store.dispatch('get', data)


        }
    }
</script>
