import axios from 'axios';
import router from '../../router';



export function registerUser({ commit, state }, user) {
    let id, company_name, emailData;
    /*registerCompany(user.company).then(res => {
        if(res.data === false){
            commit('MESSAGE', 'Company name already exist ')
            return;
        }*/
       // if(res.data === true){
        // 1- register using jwt api

            axios
                .post(`${process.env.VUE_APP_CMS_URL}api/auth/register`, user)
                .then(response => {
                    id = response.data[0].id
                    company_name = user.company
                    commit('MESSAGE', 'Company name has been set')

                })
                .then(()=> {
                    if(!id){
                        commit('MESSAGE', 'No user id, registration has failed.')
                        return;
                    }

                    // 2- add to user meta table
                    axios
                        .patch(
                            `${process.env.VUE_APP_CMS_URL}user/${id}`,
                            user,
                        )
                        .then(response => {
                            // 3- send email
                           commit('MESSAGE', 'Account has been creared successfully')

                        })

                        .catch(error => {
                            console.log(error);

                            //this.dispatch('logout')
                            commit('MESSAGE', 'User registration has failed, please get in touch.')


                        })
                })



                .catch(error => {
                    console.log(error);
                    commit('MESSAGE', 'Registration error, email already exists ')
                    // this.dispatch('refreshToken')

                })

       // }
   // });



}

function registerCompany(company) {

    return axios
        .post(`${process.env.VUE_APP_CMS_URL}company`, {company_name: company})
        .then(response => {
            return response
        })

        .catch(error => {
            return error;

        })
}

