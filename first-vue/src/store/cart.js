import { createStore } from 'vuex'

const cart = createStore({
  state() {
    return {
      cart: []

    }
      
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store;
