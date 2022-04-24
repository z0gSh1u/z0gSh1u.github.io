import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './styles/main.less'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  document.title = "z0gSh1u's page - zxuuu.tech"
  next()
})

app.use(router)

app.mount('#app')
