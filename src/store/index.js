import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import * as mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

let store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store