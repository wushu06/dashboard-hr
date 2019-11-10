import axios from 'axios';
import store from '../../store'

export function getAllKudos({commit}) {
    let id = store.getters.companyName.company_id
    if(!id){
        return;
    }
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios.get(`${process.env.VUE_APP_CMS_URL}kudos/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_KUDOS', res.data)

        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}

export function addKudos({commit}, data) {

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}kudos/add`,

             data,
            authorization,

        )
        .then(response => {
                commit('MESSAGE', 'Kudos has been added successfully');
                store.dispatch('getAllKudos')


        })


        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'Couldn\'t add kudos')

        })

}

export function likeKudos({commit}, data) {

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}kudos/like`,
            data,
            authorization,

        )
        .then(response => {
            commit('MESSAGE', 'Like has been added successfully');
            store.dispatch('getAllKudos')


        })


        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'Couldn\'t add like')

        })

}



export function deleteKudos({commit},data) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}kudos/delete`,

            data,
            authorization,


        )
        .then(response => {
            commit('MESSAGE', 'Kudos has been deleted ')
            store.dispatch('getAllKudos')
        })


        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Kudos couldn\'t be deleted ')


        })
}

export function  archiveKudos ({commit }, data) {


    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}kudos/archive`,
            data,
            authorization,
        )
        .then(response => {

            if(data.archive == 1) {
                commit('MESSAGE', 'Kudos has been archived ')
            }else{
                commit('MESSAGE', 'Kudos has been restored ')
            }

            store.dispatch('getAllKudos')
        })


        .catch(error => {

            //this.dispatch('logout')
            if(data.archive == 1) {
                commit('MESSAGE', 'Kudos couldn\'t be archived ')
            }else{
                commit('MESSAGE', 'Kudos couldn\'t be restored ')
            }



        })
}

export function getAllArchivedKudos({commit}) {
    let id = store.getters.companyName.company_id
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios.get(`${process.env.VUE_APP_CMS_URL}kudos-archived/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_KUDOS', res.data)


        })
        .catch(error => {
            console.log(error);


        })
}


