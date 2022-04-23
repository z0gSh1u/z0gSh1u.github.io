import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'animate.css'

import './styles/main.less'

Vue.config.productionTip = false

Vue.use(Antd)

router.beforeEach((to, from, next) => {
  document.title = "z0gSh1u's page - zxuuu.tech"
  next()
})

new Vue({
  router,
  render: (h: any) => h(App)
}).$mount('#app')
