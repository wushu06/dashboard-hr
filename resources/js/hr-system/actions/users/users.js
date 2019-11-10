import axios from 'axios';
import store from '../../store'

export function getAllUsers({commit}) {
    let id = store.getters.companyName.company_id
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios.get(`${process.env.VUE_APP_CMS_URL}users/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_ALL_USERS', res.data)




        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}



export  function editUser ({commit, state },  data) {
    let id = data.id;

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }


    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}users/edit/${id}`,
            data,
            authorization,
        )
        .then(response => {
            commit('MESSAGE', 'User has been updated ')
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            store.dispatch('get', data)
        })
        .catch(error => {
            commit('MESSAGE', 'Edit couldn\'t be updated ')

        })
}



export function addUser({ commit, state }, data) {

            let id;
            axios
                .post(`${process.env.VUE_APP_CMS_URL}api/auth/register`, data)
                .then(response => {
                    id = response.data[0].id
                    commit('MESSAGE', 'User has been added successfully')
                })
                .then(()=> {
                    if(!id){
                        commit('MESSAGE', 'No user id, registration has failed.')
                        return;
                    }
                    const authorization = {
                        headers: {
                            Authorization: `Bearer ${this.state.token}`
                        }
                    }



                    axios
                        .patch(
                            `${process.env.VUE_APP_CMS_URL}user/${id}`,
                            data,
                            authorization,
                        )
                        .then(response => {
                            //commit('MESSAGE', 'user has been updated')
                            let data = {
                                getUrl: 'users/company/',
                                commit: 'GET_ALL_USERS'
                            }
                            store.dispatch('get', data)

                        })
                        .catch(error => {
                            //this.dispatch('logout')
                            commit('MESSAGE', 'User could not be added')


                        })
                })
                .catch(err=> {
                    commit('MESSAGE', 'Email already exist')
                })

}
export function  deleteUser ({commit }, id) {

    axios
        .delete(
            `${process.env.VUE_APP_CMS_URL}users/delete/${id}`,

            { data: { token: this.state.token } }


        )
        .then(response => {

            commit('MESSAGE', 'User has been deleted ')
            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            store.dispatch('get', data)
        })


        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'User couldn\'t be deleted ')


        })
}
export function  archiveUser ({commit }, data) {
    let id = data.id;

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}users/archive/${id}`,
            data,
            authorization,
        )
        .then(response => {

            if(data.archive == 1) {
                commit('MESSAGE', 'User has been archived ')
            }else{
                commit('MESSAGE', 'User has been restored ')
            }

            let data = {
                getUrl: 'users/company/',
                commit: 'GET_ALL_USERS'
            }
            store.dispatch('get', data)
        })


        .catch(error => {
            //this.dispatch('logout')
            if(data.archive == 1) {
                commit('MESSAGE', 'User couldn\'t be archived ')
            }else{
                commit('MESSAGE', 'User couldn\'t be restored ')
            }



        })
}

export function getAllArchivedUsers({commit}) {
    let id = store.getters.companyName.company_id
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios.get(`${process.env.VUE_APP_CMS_URL}users-archived/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_ALL_USERS', res.data)


        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}
