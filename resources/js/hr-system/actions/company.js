import axios from 'axios';
import router from "../router";

export function getCompany({commit}, user_id) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios.get(`${process.env.VUE_APP_CMS_URL}company/user/${user_id}`,authorization)
        .then((res)=> {

            // commit will fire mutations
            commit('SET_COMPANY_NAME', res.data[0])

        })
        .then(()=>{
            router.push({ name: 'profile' })

        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}

export function getCompanyData({commit, state}, user_id) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios.get(`${process.env.VUE_APP_CMS_URL}company/user/${user_id}`, authorization)
        .then((res)=> {

            // commit will fire mutations
            state.companyName = ''
            commit('SET_COMPANY_NAME', res.data[0])

        })

        .catch(error => {
            console.log(error);


        })
}