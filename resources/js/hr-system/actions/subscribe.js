import axios from 'axios';
import store from '../store'
import router from '../router'

export function subscribe({commit}, data) {
    let res;
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }


    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}subscribe`,
            data,
            authorization

        )
        .then(response => {
            res = response

            commit('MESSAGE', response.data);
            if(response.data === 'Payment complete') {
                store.dispatch('getCompany', data.user_id)
            }



        })
        .then(()=> {

        })


        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            commit('MESSAGE', 'Payment failed!')

        })
}

export function checkSubscription({commit}, data) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    let stripe_id = data.stripe_id
    let user_id = data.user_id
    axios
        .get(
            `${process.env.VUE_APP_CMS_URL}subscribe/${stripe_id}`,
            authorization

        )
        .then(response => {
            console.log(response.data);
            if(response.data !== 'active') {
                router.push({name: 'subscribe'})
            }else{
                store.dispatch('getCompanyData', user_id)
            }
        })
        .catch(error => {
            console.log(error);


        })
}