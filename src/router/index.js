import Vue from 'vue'
import Router from 'vue-router'
import navBar from '@/pages/navbar'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navBar',
      component: navBar
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
