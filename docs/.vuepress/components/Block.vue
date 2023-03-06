<template>
  <div class="block">
    <div class="left">
      <img :src="avatar" class="avatar nozoom" />
    </div>
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
.block {
  .avatar {
    width: 40px;
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
  // justify-content: space-around;
  align-items: center;
  width: fit-content;
  min-width: 300px;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 2px #ddd;
  margin: 0.5rem;
}
</style>
