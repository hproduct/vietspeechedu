import { LocalStorageKey } from '@/constant/LocalStorageKey'
import { createStore } from 'vuex'
import cookie from 'vue-cookies'

const store = createStore({
  namespaced: true,
  state: {
    isLoading: false,
    error: Object,//save error for error page
    isLogin: cookie.get(LocalStorageKey.TOKEN_KEY) !== null,
  },
  getters: {
  },
  mutations: {
    setIsLoading(state, newLoadingStatue) {
      state.isLoading = newLoadingStatue
    },
    setIsLogin(state, newLoginState){
      state.isLogin = newLoginState
    },
    setError(state, newError) {
      
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
