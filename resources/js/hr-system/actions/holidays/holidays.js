import axios from 'axios';
import store from '../../store'

export function getAllHolidays({commit}) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    let id = store.getters.companyName.company_id
    if(!id){
        return;
    }


    axios.get(`${process.env.VUE_APP_CMS_URL}holidays/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_HOLIDAYS', res.data)

        })
        .catch(error => {
            //this.dispatch('logout')
           // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}

export function addHoliday({commit}, data) {

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}holidays/add`,

             data,
            authorization

        )
        .then(response => {
            console.log(response);
            if(response.data === 'true'){
                commit('MESSAGE', 'Holiday has been added successfully');
                store.dispatch('getAllHolidays')
            }else{
                commit('MESSAGE', 'Not enough holidays!');
            }

        })


        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            commit('MESSAGE', 'Couldn\'t add holiday')

        })

}


export function editHoliday({commit}, data) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    const id = data.id
    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}requests/edit/${id}`,
            data,
            authorization,
        )
        .then(response => {
            if(response.data === 'true'){
                commit('MESSAGE', 'Holiday has been updated')
                store.dispatch('getAllHolidays')
            }else{
                commit('MESSAGE', 'Not enough holidays!');
            }


        })
        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Holiday could not be updated')


        })
}



export function approveHoliday({commit}, data) {

    const id = data.id
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}requests/approve/${id}`,
            data,
            authorization,
        )
        .then(response => {
                commit('MESSAGE', 'Holiday request has been updated')
                store.dispatch('getAllHolidays')



        })
        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Holiday could not be approved')


        })
}

export function deleteHoliday({commit}, data) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}requests/delete`,
            data,
            authorization,


        )
        .then(response => {
            commit('MESSAGE', 'Holiday has been deleted ')
            store.dispatch('getAllHolidays')
        })


        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Holiday couldn\'t be deleted ')


        })
}

export function  archiveHoliday ({commit }, data) {


    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}holiday/archive`,
            data,
            authorization,
        )
        .then(response => {

            if(data.archive == 1) {
                commit('MESSAGE', 'Holiday has been archived ')
            }else{
                commit('MESSAGE', 'Holiday has been restored ')
            }

            store.dispatch('getAllHolidays')
        })


        .catch(error => {

            //this.dispatch('logout')
            if(data.archive == 1) {
                commit('MESSAGE', 'Holiday couldn\'t be archived ')
            }else{
                commit('MESSAGE', 'Holiday couldn\'t be restored ')
            }



        })
}

export function getAllArchivedHolidays({commit}) {
    let id = store.getters.companyName.company_id
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    axios.get(`${process.env.VUE_APP_CMS_URL}holidays-archived/company/${id}`, authorization)
        .then((res)=> {
            // commit will fire mutations
            commit('GET_HOLIDAYS', res.data)


        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}

