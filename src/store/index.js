import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    league: "bra.1",
    ano: 2021
  },
  mutations: {
    CHANGE_LEAGUE(state, payload) {
      state.league = payload
    },
    CHANGE_ANO(state, payload) {
      state.ano = payload
    }
  },
  actions: {
    changeUser(context, payload) {
      context.commit("CHANGE_LEAGUE", payload);
    },
    changeAno(context, payload) {
      context.commit("CHANGE_ANO", payload);
    }
  },
  modules: {

  }
})
