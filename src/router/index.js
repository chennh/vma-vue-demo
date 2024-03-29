import Vue from 'vue'
import Router from 'vue-router'
import * as types from './types'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/demo',
    name: types.DEMO,
    component: resolve => require(['@/pages/demo.vue'], resolve)
  }, {
    path: '/d3',
    name: 'D3',
    component: resolve => require(['@/pages/d3.vue'], resolve)
  }]
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
