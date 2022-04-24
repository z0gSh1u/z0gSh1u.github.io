import { createRouter, createWebHashHistory } from 'vue-router'

import Aboutme from './components/Aboutme.vue'
import Blog from './components/Blog.vue'
import Calendar from './components/Calendar.vue'
import Collection from './components/Collection.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Aboutme
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/calendar',
      component: Calendar
    },
    {
      path: '/collection',
      component: Collection
    }
  ]
})
