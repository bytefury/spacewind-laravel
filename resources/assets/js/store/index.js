import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const initialState = {
  isAppLoaded: false
}

export default new Vuex.Store({
  strict: true,
  state: initialState,
  getters,
  mutations,
  actions,

  modules: {}
})
