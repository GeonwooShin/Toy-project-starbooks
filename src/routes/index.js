import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/routes/Home'
import Login from '~/routes/Login'
import Join from '~/routes/Join'
import BookSearch from '~/routes/BookSearch'

export default createRouter({
  // hash, history
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/BookSearch',
      component: BookSearch
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Join',
      component: Join
    }    
  ]
})