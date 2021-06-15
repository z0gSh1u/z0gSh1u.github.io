import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ant 样式
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 动画
import 'animate.css'

// 平滑滚动
import VueSmoothScroll from 'vue2-smooth-scroll'

// 自定义样式
import './styles/main.less'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueSmoothScroll)

router.beforeEach((to, from, next) => {
  document.title = "z0gSh1u's page - zxuuu.tech"
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
