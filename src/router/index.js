import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/error/NotFound'
import LoginBase from '@/views/LoginBase'
import BundleBase from '@/views/BundleBase'
import bundleRouter from '@/router/bundle'
import LIstBase from '@/views/ListBase'
import listRouter from '@/router/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/login',
      name: this.path,
      component: LoginBase
    },
    {
      path: '/',
      component: BundleBase,
      children: bundleRouter
    },
    {
      path: '/tag',
      component: LIstBase,
      children: listRouter
    }
  ]
})
