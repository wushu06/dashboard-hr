import axios from 'axios';
import store from '../../store'

export function getAllDepartments({commit}) {
    let id = store.getters.companyName.company_id
    if(!id){
        return;
    }
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios.get(`${process.env.VUE_APP_CMS_URL}departments/company/${id}`, authorization)
        .then((res)=> {

            // commit will fire mutations
            commit('GET_DEPARTMENTS', res.data[1])
            commit('GET_DEPARTMENTS_HEADS', res.data[0])

        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            // commit('MESSAGE', 'Getting types error: '+ error.response.status+' '+error.response.statusText)
            // this.dispatch('refreshToken')

        })
}

export function addDepartment({commit}, data) {

    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}departments/add`,
            data,
            authorization,

        )
        .then(response => {

                commit('MESSAGE', 'Department has been added successfully');
                store.dispatch('getAllDepartments')
            store.dispatch('getAllUsers')


        })


        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Couldn\'t add department')

        })

}


export function editDepartment({commit}, data) {
    const authorization = {
        headers: {
            Authorization: `Bearer ${this.state.token}`
        }
    }
    const id = data.id
    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}departments/edit/${id}`,
            data,
            authorization,
        )
        .then(response => {
                commit('MESSAGE', 'Department has been updated')
                store.dispatch('getAllDepartments')
                store.dispatch('getAllUsers')



        })
        .catch(error => {
            console.log(error);
            //this.dispatch('logout')
            commit('MESSAGE', 'Department could not be updated')


        })
}




export function deleteDepartment({commit}, data) {
    let id = data.id
    axios
        .delete(
            `${process.env.VUE_APP_CMS_URL}departments/delete/${id}`,

            { data: { token: this.state.token, name: data.name } }


        )
        .then(response => {
            commit('MESSAGE', 'Department has been deleted ')
            store.dispatch('getAllDepartments')
            store.dispatch('getAllUsers')
        })


        .catch(error => {
            //this.dispatch('logout')
            commit('MESSAGE', 'Department couldn\'t be deleted ')


        })
}
