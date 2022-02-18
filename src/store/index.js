import { createStore } from 'vuex'
import book from './book'
import signup from './signup'
import loginService from './loginService'
import commentService from './commentService'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    book,
    signup,
    loginService,
    commentService
  },
  plugins: [
    createPersistedState({
      paths: ["loginService"]
    })
  ]
})