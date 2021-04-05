import Vue from 'vue'
import Router from 'vue-router'

import Aboutme from '@/components/Aboutme.vue'
import Blog from '@/components/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Aboutme
    }
  ]
})
