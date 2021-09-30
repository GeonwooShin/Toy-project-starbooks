import { createStore } from 'vuex'
import book from './book'
import signup from './signup'
import loginService from './loginService'
import commentService from './commentService'

export default createStore({
  modules: {
    book,
    signup,
    loginService,
    commentService
  }
})