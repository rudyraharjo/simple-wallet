window.Vue = require('vue');

import Vuex from 'vuex'
import auth from './modules/auth'
import transaction from './modules/transaction'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters : {},
    mutations: {},
    actions:{},
    
    modules: {
        namespaced: true,
        auth,
        transaction,
    },
})