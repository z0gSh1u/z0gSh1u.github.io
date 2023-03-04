<template>
  <div class="aboutme">
    <div class="leftblock">
      <img src="../public/assets/photo.jpg" class="avatar" />
    </div>
    <div class="rightblock">
      <p class="name">卓旭</p>
      <p class="intro-content" v-html="aboutmeIntroduction"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
const markdownIt = MarkdownIt()

export default defineComponent({
  setup() {
    onMounted(() => {
    })

    const aboutmeIntroduction = ref(
      [
        `我目前正在[东南大学](https://www.seu.edu.cn)计算机科学与工程学院就读硕士研究生二年级，主要
研究方向为计算机断层扫描(CT，尤其是CBCT)图像的获取、重建和与X射线物理相关的处理过程(导师为
[Prof. Yang Chen](https://cse.seu.edu.cn/2019/0102/c23024a256991/page.htm)
与[A.P. Xu Ji](https://cse.seu.edu.cn/2022/0221/c23024a399204/page.htm)。`,
        `
2023年上半年，我正在寻找与计算机专业相关的开发岗位的暑期实习。我能够使用JavaScript (ES6)、TypeScript、
Vue.js (2/3)、Node.js Runtime、CSS (Less)、Python；我正在学习Golang；必要时我也可以使用C++、C#、
PHP、Java、CUDA进行编程——我认为不应该局限于特定的编程语言，而应该面向任务实际适当选型。
`,
        `
我的项目经历包括Web全栈开发、编程语言(PL)、图形学(CG)、图像处理、深度学习等多种方向。通过左侧的“项目”选项卡或
进入[GitHub](https://github.com/z0gSh1u)可以了解更多。
`,
      ]
        .map((x) => x.replace(/\r?\n/g, ''))
        .map((x) => markdownIt.render(x, {}))
        .map((x) => x.replace(/<a href/g, '<a target="_blank" href'))
        .join('')
    )
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
    .name {
      font-size: 1.8rem;
      font-weight: bold;
      font-family: 'Noto Serif SC', serif;
    }
    .intro-content {
      p {
        margin-block: 0 !important;
      }
    }
  }
}
</style>
