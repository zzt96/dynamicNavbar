import Vue from 'vue'
import vuex from 'vuex'
import nav from '../data/nav'

Vue.use(vuex)

// function setNavIndex (nav) {
//
// }

const store = new vuex.Store({
  state: {
    nav: nav
    // nav: setNavIndex(nav)
  },
  getters: {

  },
  mutations: {
    changeName(state, payload) {
     state.nav[0].label = payload.name;
    }
  },
  actions: {

  }

})

export default store
