import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/frontend/About.vue')
    },
    {
        path: '*',
        name: 'not-found',
        component:  () => import(/* webpackChunkName: "about" */ './views/404.vue'),
    },
      {
          path: '/profile',
          name: 'profile',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/Profile.vue'),
      },
      {
          path: '/login',
          name: 'login',
          component:   Login,
      },
      {
          path: '/register',
          name: 'register',
          component:  () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
      },

      {
          path: '/dashboard',
          name: 'dashboard',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/Dashboard.vue'),
      },
      {
          path: '/calendar',
          name: 'calendar',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/Calendar.vue'),
      },
      {
          path: '/admin',
          name: 'admin',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/Admin.vue'),
      },
      {
          path: '/contact',
          name: 'contact',
          component:  () => import(/* webpackChunkName: "about" */ './views/frontend/Contact.vue'),
      },
      {
          path: '/subscribe',
          name: 'subscribe',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/Subscribe.vue'),
      },
      {
          path: '/activate/:code',
          name: 'activate',
          component:  () => import(/* webpackChunkName: "about" */ './views/Activate.vue'),
      },
      {
          path: '/forgot-password/',
          name: 'forgot-password',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/ForgotPassword.vue'),
      },
      {
          path: '/reset-password',
          name: 'reset-password',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/ResetPassword.vue'),
      },
      {
          path: '/reset-password/:code',
          name: 'reset-password',
          component:  () => import(/* webpackChunkName: "about" */ './views/backend/ResetPassword.vue'),
      }
  ]
})
