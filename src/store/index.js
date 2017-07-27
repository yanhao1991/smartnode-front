import Vue from 'vue'
import Vuex from 'vuex'
import runtime from './modules/runtime'
// import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aaa: '1'
  },
  mutations: {
    updateaaa (state, message) {
      state.aaa = message
    }
  },
  // actions,
  // getters,
  modules: {
    runtime
  }
})
