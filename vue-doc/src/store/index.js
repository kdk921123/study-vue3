import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
      
  },
  getters: {
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  modules: {
  }
})

export default store;
