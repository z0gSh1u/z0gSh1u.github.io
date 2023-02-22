/// <reference path="shims-vue.d.ts" />

import { defineClientConfig } from '@vuepress/client';
import Aboutme from './components/Aboutme.vue'
import Calendar from './components/Calendar.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Aboutme', Aboutme)
    app.component('Calendar', Calendar)
  },
})
