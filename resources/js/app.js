/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
import './assets/scss/app.scss'
//window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('home', require('./components/Home.vue').default);
Vue.component('main-header', require('./components/homeHeader.vue').default);
Vue.component('main-footer', require('./components/Footer.vue').default);
Vue.component('employees-list', require('./views/employees/List.vue').default);
Vue.component('toolbar', require('./components/header').default);
Vue.component('profile', require('./views/employees/Profile').default);
// kudos
Vue.component('kudos-list', require('./views/Kudos/List').default);
// dep
Vue.component('department-list', require('./views/departments/List').default);
// role
Vue.component('role-list', require('./views/roles/List').default);

Vue.component('holiday-list', require('./views/holidays/List').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*
const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    template: "<employees-list/>"
});
*/

//Vue.use(Vuetify);

new Vue({
    el: "#app",
    vuetify: new Vuetify(),
});
