import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/app.scss'

Vue.use(Vuetify, {
    theme: {
        primary: '#300D4F',
        light: {
            background: '#300D4F',
            primary: '#300D4F',

        },

    }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
