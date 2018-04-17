import Vue from 'vue'
import Router from 'vue-router'
import navBar from '@/pages/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navBar',
      component: navBar
    }
  ]
})
