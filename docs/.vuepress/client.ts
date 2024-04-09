/// <reference path="shims-vue.d.ts" />

import { defineClientConfig } from '@vuepress/client'
import Aboutme from './components/Aboutme.vue'
import Social from './components/Social.vue'
import Block from './components/Block.vue'

import './styles/index.scss'
import './styles/main.less'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Aboutme', Aboutme)
    app.component('Social', Social)
    app.component('Block', Block)
  },
})
