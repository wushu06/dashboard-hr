import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import { checkToken, refreshToken} from './actions/account/token'
import {registerUser} from './actions/account/register'
import {loginUser, logout} from './actions/account/login'
import {activateUser, resetPassword, forgotPassword, setPassword} from './actions/account/activate'
import { deleteUser, editUser, addUser, archiveUser, getAllArchivedUsers} from './actions/users/users'
import {getCompany, getCompanyData} from './actions/company'
import {subscribe, checkSubscription} from './actions/subscribe'
import {sendContactEmail} from './actions/email'
import {post, get} from './actions/crud'
Vue.use(Vuex)


export default new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
                removeItem: key => Cookies.remove(key)
            }
        })
    ],
  state: {
      user: {},
      companyName: '',
      tokenValid: false,
      token: '',
      message: '',
      invalidCredentials: '',
      holidays: [],
      departments: [],
      departmentsHeads: [],
      kudos: [],
      AllUsers: [],
      emailSent: '',
      subscriptionStatus: true
  },
    getters: {
        user: state => state.user,
        companyName: state => state.companyName,
        token: state => state.token,
        tokenValid: state => state.tokenValid,
        message: state => state.message,
        invalidCredentials: state => state.invalidCredentials,
        holidays: state => state.holidays,
        departments: state => state.departments,
        departmentsHeads: state => state.departmentsHeads,
        kudos: state => state.kudos,
        AllUsers: state => state.AllUsers,
        emailSent: state => state.emailSent,
        subscriptionStatus: state => state.subscriptionStatus
    },
  mutations: {
      SET_USER: (state, user) => {
          state.user = user
      },
      SET_COMPANY_NAME: (state, company) => {
          state.companyName = company
      },
      SET_TOKEN: (state, token) => {
          state.token = token
      },
      SET_VALID_TOKEN: (state, valid) => {
          state.tokenValid = valid
      },
      MESSAGE: (state, message) => {

          state.message = message
      },
      SET_INVALID_CREDENTIALS: (state, invalidCredentials) => {
          state.invalidCredentials = invalidCredentials
      },
      LOGOUT: (state) => {
          document.cookie = 'vuex=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

          state.user = ''
          state.token = ''
      },
      GET_HOLIDAYS: (state, holidays) => {
          state.holidays = holidays
      },
      GET_DEPARTMENTS: (state, departments) => {
          state.departments = departments
      },
      GET_DEPARTMENTS_HEADS: (state, departmentsHeads) => {
          state.departmentsHeads = departmentsHeads
      },
      GET_KUDOS: (state, kudos) => {
          state.kudos = kudos
      },
      GET_ALL_USERS: (state, users) => {
          state.AllUsers = users
      },
      EMAIL_SENT:  (state, message) => {
          state.emailSent = message
      },
      SUBSCRIPTION_STATUS: (state, status) => {
          state.subscriptionStatus = status
      }
  },
  actions: {
      registerUser,loginUser, logout, checkToken, refreshToken,
      deleteUser,editUser,addUser, archiveUser,  getAllArchivedUsers,
      activateUser, resetPassword, forgotPassword, setPassword,
      getCompany,getCompanyData,
      subscribe, checkSubscription,
      sendContactEmail,
      post, get

  }
})
