<template>
  <div class="collection-root">
    <div id="marked-display" ref="markedDisplay" class="markdown-body"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { marked } from 'marked'

export default defineComponent({
  data() {},
  methods: {
    async initCollection() {
      const mdContent: string = await (await fetch('/CollectionsMarkdown.md', { method: 'get', mode: 'cors' })).text()
      const renderer = new marked.Renderer()
      renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`
      // @ts-ignore
      this.$refs['markedDisplay'].innerHTML = marked(mdContent, { renderer })
    }
  },
  created() {
    this.initCollection()
  }
})
</script>

<style scoped lang="less">
.collection-root {
  margin: 1.5rem 3rem;
}
</style>
