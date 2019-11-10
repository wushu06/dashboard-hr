import axios from 'axios';
import router from '../../router';
import store from '../../store';

export function loginUser({ commit, state }, user) {
    let name;
    axios
        .post(`${process.env.VUE_APP_CMS_URL}api/auth/login`, user)
        .then(response => {

            commit('SET_TOKEN', response.data.token)
            commit('SET_USER', response.data.user)
            commit('SET_VALID_TOKEN', true)
            commit('MESSAGE', '')

            name = response.data.user.name
            store.dispatch('getCompany',  response.data.user.id)


        })


        .then(()=> {
            commit('MESSAGE', 'Hello, '+name)
        })
        .catch(error => {

            console.log(error.response)

            if(error.response.data.error) {
                commit('MESSAGE', error.response.data.error.replace(/_/g, ' '))
            } else {
              /*  const errors = []

                for (const key of Object.keys(error.response.data.errors)) {
                    error.response.data.errors[key].forEach(err =>{
                        errors.push(err)
                    })
                }

                console.log(errors)

                commit('MESSAGE', errors)*/
            }
            //commit('MESSAGE', 'Login error: '+error.response.status+'- '+error.response.statusText)
           // commit('MESSAGE', 'Wrong email or password')

        })
}

export function logout({commit}) {
    commit('LOGOUT')
    commit('SET_VALID_TOKEN', false)
    router.push({ name: 'login' })
}