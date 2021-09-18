import { createStore } from 'vuex'
import book from './book'
import signup from './signup'

export default createStore({
  modules: {
    book,
    signup
  }
})