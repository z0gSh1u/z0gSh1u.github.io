<!-- 页脚 -->

<template>
  <a-row class="footer" type="flex" justify="center" align="middle" :gutter="2">
    <!-- 版权 -->
    <span>©2021 zxuuu.tech 苏ICP备18044844号 / 基于 vuesume</span>
  </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import '../styles/variable';

.footer {
  & > div {
    margin: 1rem auto;
  }

  background: #303030;
}
</style>
