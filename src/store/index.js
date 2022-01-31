import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    league: "bra.1",
  },
  mutations: {
    CHANGE_LEAGUE(state, payload) {
      state.league = payload
    }
  },
  actions: {
    changeUser(context, payload) {
      context.commit("CHANGE_LEAGUE", payload);
    }
  },
  modules: {

  }
})
