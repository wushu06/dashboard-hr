import axios from "axios/index";

export function sendEmail ({ commit, state },data)  {
    fetch(`${process.env.VUE_APP_BASE_URL}mail/mailswift/notifications.php`, {

        method: "POST",
        body: "subject="+data.subject+"&email="+data.email+"&name="+data.name+"&message="+data.message,
        headers:
            {
                "Content-Type": "application/x-www-form-urlencoded"
            }
    }).then( response => {
        commit('MESSAGE', 'Email has been sent')
    })
        .catch( error => {
            console.log(error);
            commit('MESSAGE', 'Email coudn\'t be send ')
        })
}


export function sendContactEmail ({commit},data)  {

      //  body: "subject="+data.subject+"&email="+data.email+"&name="+data.email+"&message="+data.text,

    axios
        .post(
            `${process.env.VUE_APP_CMS_URL}contact-us`,
            data
        )
        .then(response => {

            commit('MESSAGE', 'Message has been sent successfully, Thank you');
         })
        .catch( error => {

            commit('MESSAGE', 'Something went wrong, please try again later');
        })
}