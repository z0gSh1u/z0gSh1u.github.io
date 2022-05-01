<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'
export default defineComponent({
  components: {
    Home
  }
})
</script>

<style lang="less">
#app {
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
