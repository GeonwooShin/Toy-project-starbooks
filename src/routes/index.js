import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/routes/Home'
import Login from '~/routes/Login'
import Join from '~/routes/Join'
import BookSearch from '~/routes/BookSearch'
import DetailedBook from '~/routes/DetailedBook'

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
      path: '/DetailedBook/:id',
      component: DetailedBook
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