import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Aboutme from '@/components/Aboutme.vue'

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Aboutme // no lazy loading
    },
    {
      path: '/blog',
      component: () => import('@/components/Blog.vue')
    },
    {
      path: '/calendar',
      component: () => import('@/components/Calendar.vue')
    },
    {
      path: '/collection',
      component: () => import('@/components/Collection.vue')
    }
  ]
})
