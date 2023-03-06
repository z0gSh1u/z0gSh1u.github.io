<template>
  <div :style="{ backgroundColor: bgc }" class="social-item-container">
    <img :src="icon" class="nozoom" />&nbsp;
    <a :style="{ color: fgc }" :href="url" target="_blank" v-if="url != '#'">{{
      title
    }}</a>
    <span :style="{ color: fgc }" v-else>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface SocialAttr {
  bgc: string
  fgc: string
  icon: string
  title: string
  url: string
}

export default defineComponent({
  setup(_, { attrs }) {
    const { bgc, fgc, icon, title, url } = <SocialAttr>(
      (attrs as typeof attrs | SocialAttr)
    )

    return {
      bgc,
      fgc,
      icon,
      title,
      url,
    }
  },
})
</script>

<style scoped lang="less">
.social-item-container {
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem;
  font-size: 1rem;
  a {
    text-decoration: none;
    font-weight: normal;
    line-height: 1.5;
  }
  img {
    height: 30px;
    max-width: 100px;
    margin-right: 5px;
  }
}
</style>
