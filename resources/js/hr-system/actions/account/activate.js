import axios from "axios/index";
import store from "../../store";
import router from "../../router";

export  function activateUser ({commit },  data) {

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}api/auth/account-activation`,
            {activation_code: data},
        )
        .then(response => {
            if(response.status === 200){
                commit('MESSAGE', 'User has been activated ')
                store.dispatch('getAllUsers')
            }

        })
        .then(()=> {
          //  router.push({ name: 'profile' })
        })
        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'User couldn\'t be activated ')

        })
}

export  function forgotPassword ({commit },  data) {
    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}api/auth/forgot-password`,
            data,
        )
        .then(response => {

            if(response.status === 200){
                commit('MESSAGE', 'Email has been sent ')
                router.push({ name: 'reset-password' })
            }
        })
        .then(()=> {
           //
        })
        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'Password couldn\'t be reset ')

        })
}

export  function resetPassword ({commit },  data) {
    console.log(data);
    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}api/auth/reset-password`,
             data,
        )
        .then(response => {
            if(response.status === 200){
                commit('MESSAGE', 'User has been activated ')
                router.push({ name: 'login' })
            }


        })
        .then(()=> {
          //  router.push({ name: 'profile' })
        })
        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'Password couldn\'t be reset ')

        })
}

export  function setPassword ({commit },  data) {
    axios
        .patch(
            `${process.env.VUE_APP_CMS_URL}set-password/${data.id}`,
            data,
        )
        .then(response => {
            if(response.status === 200){
                commit('MESSAGE', 'Password has been set ')
                router.push({ name: 'login' })
            }


        })
        .then(()=> {
            //  router.push({ name: 'profile' })
        })
        .catch(error => {
            console.log(error);
            commit('MESSAGE', 'Password couldn\'t be reset ')

        })
}

