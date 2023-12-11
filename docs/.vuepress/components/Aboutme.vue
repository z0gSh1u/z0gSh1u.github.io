<template>
  <div class="aboutme">
    <div class="leftblock">
      <img src="../public/assets/photo.jpg" class="avatar" />
    </div>
    <div class="rightblock">
      <p class="name">卓旭</p>
      <p class="intro-content" v-html="aboutmeIntroduction"></p>
    </div>
    <div id="google_translate_element"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MarkdownIt from 'markdown-it'
const markdownIt = MarkdownIt()

const aboutmeIntroduction = [
  `我目前正在[东南大学](https://www.seu.edu.cn)计算机科学与工程学院就读硕士研究生三年级，主要
研究方向为计算机断层扫描 (CT) 的获取、重建和与X射线物理相关的数字图像处理过程 (导师为 
[Prof. Yang Chen](https://cse.seu.edu.cn/2019/0102/c23024a256991/page.htm)
 与 [A.P. Xu Ji](https://cse.seu.edu.cn/2022/0221/c23024a399204/page.htm))。`,
  `2024年秋毕业，我计划从事 Web 前端 Infra 的开发工作。近期，我的开发重心计划
在 WebGL、WebGPU、WebAssembly、Electron 等技术上。`,
  `
向下滑动，可以进一步了解我的社交网络、学历、实习经历等；通过左侧的导航，可以了解我的相关项目经历、
博客博文和日程安排等。
`,
]
  .map((x) => x.replace(/\r?\n/g, '')) // normalize it
  .map((x) => markdownIt.render(x, {})) // make it rendered Markdown
  .map((x) => x.replace(/<a href/g, '<a target="_blank" href')) // links open in new tab
  .join('') // done

export default defineComponent({
  setup() {
    return {
      aboutmeIntroduction,
    }
  },
})
</script>

<style scoped lang="less">
.aboutme {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .leftblock {
    width: 25%;
    .avatar {
      width: 150px;
      border-radius: 50%;
    }
  }
  .rightblock {
    width: 75%;
    margin-left: 1.5rem;
    .name {
      font-size: 1.8rem;
      font-weight: bold;
      font-family: 'Noto Serif SC', serif;
    }
    .intro-content {
      p {
        margin-block: 0 !important;
      }
      text-indent: 2rem;
      word-break: normal;
    }
  }
}
</style>
