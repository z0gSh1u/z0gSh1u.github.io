<template>
  <div class="life-root">
    <span>本页面仍在施工中...</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.life-root {
  height: 100vh;
  margin: 20px;
  span {
    display: block;
    width: 100%;
    background-color: rgb(230, 1, 1);
    color: #fff;
  }
}
</style>
