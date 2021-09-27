import { createStore } from 'vuex'
import book from './book'
import signup from './signup'
import loginService from './loginService'

export default createStore({
  modules: {
    book,
    signup,
    loginService
  }
})