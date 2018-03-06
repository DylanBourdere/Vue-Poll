import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      mode: 'history',
      name: 'Header',
      component: Header
    }
  ]
})
