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

const aboutmeIntroduction = [
  `我目前正在[东南大学](https://www.seu.edu.cn)计算机科学与工程学院就读硕士研究生三年级，主要
研究方向为计算机断层扫描 (CT) 的获取、重建和与 X 射线物理相关的数字图像处理过程 (导师为 
[Prof. Yang Chen](https://cse.seu.edu.cn/2019/0102/c23024a256991/page.htm)
 与 [A.P. Xu Ji](https://cse.seu.edu.cn/2022/0221/c23024a399204/page.htm))。`,
]
  .map((x) => x.replace(/\r?\n/g, '')) // normalize it
  .map((x) => MarkdownIt().render(x, {})) // make it rendered Markdown
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
