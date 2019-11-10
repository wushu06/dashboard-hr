import axios from 'axios';
import store from '../store'

export function get({commit}, data) {


    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    let id = store.getters.companyName.company_id
    if(!id){
        return;
    }


    axios.get(`${process.env.VUE_APP_CMS_URL + data.getUrl + id}`, authorization)
        .then((res)=> {
            if((res.data).includes('.csv')){
                let link = document.createElement('a');
                link.href = process.env.VUE_APP_CMS_URL+res.data;
                link.download = process.env.VUE_APP_CMS_URL+res.data;
                link.dispatchEvent(new MouseEvent('click'));
                axios
                    .post(
                        `${process.env.VUE_APP_CMS_URL }users/download/unlike`,
                        {file: res.data},
                        authorization,
                    )
            }else{
                commit(data.commit, res.data )
            }


        })
        .catch(error => {

        })
}

export function  post ({commit }, data) {

    let getData = data
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL + data.postUrl}`,
            data,
            authorization,
        )
        .then(response => {

            commit('MESSAGE', response.data)
            data.getUrl && store.dispatch('get', data)
        })


        .catch(error => {
                commit('MESSAGE', 'Oops, something went wrong!')
        })
}
