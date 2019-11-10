import router from "../../router";
import axios from "axios/index";
import store from '../../store'

export function checkToken({ commit}){

    if(this.getters.token) {
        axios
            .get(`${process.env.VUE_APP_CMS_URL}api/auth/me`, {params: {token: this.getters.token}})
            .then(response => {
                commit('SET_VALID_TOKEN', true)


            })
            .catch(error => {
                console.log('token needs refreshing');
              //  store.dispatch('logout')
                //TODOS: if remember me is ticked
                store.dispatch('refreshToken')




            })
    }else{
        router.push({ name: 'login' })
    }
    if(!this.getters.companyName.name){
        store.dispatch('logout')
    }
}
export function refreshToken({commit}){
    ///api/auth/refresh-token
    axios
        .post(`${process.env.VUE_APP_CMS_URL}api/auth/refresh-token`, {token:this.getters.token})
        .then(response => {
            console.log('token has been refreshed');
            commit('SET_TOKEN', response.data.token)
            location.reload();

        })
        .catch(error => {
            if(error){
                console.log('cant refresh logged out');
                store.dispatch('logout')
            }

        })
}