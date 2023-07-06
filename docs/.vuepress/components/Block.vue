<template>
  <div class="block">
    <div class="left" :style="{ backgroundImage: `url(${avatar})` }"></div>
    <div class="right">
      <p class="name" v-text="name"></p>
      <p class="intro" v-text="intro"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface BlockAttr {
  name: string
  intro: string
  avatar: string
}
export default defineComponent({
  setup(_, { attrs }) {
    const { name, intro, avatar } = <BlockAttr>(
      (attrs as typeof attrs | BlockAttr)
    )
    return {
      avatar,
      name,
      intro,
    }
  },
})
</script>

<style scoped lang="less">
@import '../styles/variables.less';
.block {
  .left {
    width: 40px;
    height: 40px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .right {
    margin-left: 1rem;
    p {
      width: auto;
    }
    .name {
      font-size: 1rem;
    }
    .intro {
      font-size: 0.5rem;
    }
  }
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 2px #ddd;
  margin: 0.5rem;
}

@media (max-width: @ResponsiveScreenWidth) {
  .block {
    min-width: 250px;
    max-width: 100%;
  }
}
@media (min-width: @ResponsiveScreenWidth) {
  .block {
    min-width: 300px;
  }
}
</style>
