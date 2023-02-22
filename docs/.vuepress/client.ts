import { defineClientConfig } from '@vuepress/client'
import Aboutme from './components/Aboutme.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Aboutme', Aboutme)
  },
})
