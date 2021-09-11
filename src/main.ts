import Vue from 'vue'
import App from './App.vue'
import router from './router'

// antd 样式
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 动画
import 'animate.css'

// 自定义样式
import './styles/main.less'

Vue.config.productionTip = false

Vue.use(Antd)

router.beforeEach((to, from, next) => {
  document.title = "z0gSh1u's page - zxuuu.tech"
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
