import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isResumeOpened: false,
    locale: {
      lang: 'en'
    }
  },
  getters: {
    resumeVisibilityGetter: state => state.isResumeOpened
  },
  mutations: {
    SET_RESUME_STATUS(state, bool) {
      state.isResumeOpened = bool
    }
  },
  actions: {
    setResumeStatus({ commit }, bool) {
      commit('SET_RESUME_STATUS', bool)
    }
  },
  modules: {}
})
