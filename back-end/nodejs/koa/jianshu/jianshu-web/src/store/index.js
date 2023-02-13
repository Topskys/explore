/*
 * @Author: Topskys
 * @Date: 2022-12-25 14:59:16
 * @LastEditTime: 2022-12-28 10:42:23
 */
import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'


Vue.use(Vuex)





export default new Vuex.Store({
  state: {
    user:{}
  },
  getters: {
  },
  mutations: {
    setUsername(state,user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[persistedstate()]
})
