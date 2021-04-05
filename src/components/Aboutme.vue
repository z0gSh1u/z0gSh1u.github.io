<template>
  <div class="about">
    <a-row type="flex" justify="center" align="middle">
      <!-- 头像 -->
      <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="6">
        <img data-aos="fade-in" class="avatar" draggable="false" src="../assets/photo.png" />
      </a-col>
      <!-- 内容 -->
      <a-col class="color-content text-align-left col" :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <!-- 简介 -->
        <span class="name black">
          卓旭
        </span>
        <span class="brief black">
          我正在东南大学就读计算机科学与技术专业（本科大四），主要兴趣在 Web 开发领域。我于 2020
          年暑期在腾讯公司（深圳）PCG 事业群进行了前端开发岗位的实习，并获得留用资格。 2021 年 9
          月，我将在以推荐免试研究生的身份在本校继续攻读硕士学位，
          研究方向为医学影像处理。因此，近期我还在系统地学习计算机视觉与深度学习相关理论。
        </span>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="middle">
      <span>教育经历</span>
      <a-list itemLayout="horizontal" :dataSource="educationExperience">
        <a-list-item slot="renderItem" slot-scope="item" key="item._key">
          <a-list-item-meta>
            <template slot="specifiedEducationExperience">
              <div class="specifiedEducationExperience">
                <span>{{ item.timeRange }}</span>
                <span>{{ item.school }}</span>
                <span>{{ item.major }}</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class App extends Vue {
  educationExperience = [
    {
      _key: 0,
      timeRange: '2017-至今',
      school: '东南大学',
      major: '计算机科学与技术'
    }
  ]
}
</script>

<style scoped lang="scss">
@import '../styles/variable';
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap');

.specifiedEducationExperience {
  box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px 0, rgba(0, 0, 0, 0.12) 0 2px 10px 0;
}

.about {
  padding: 30px;
  .col {
    padding: 0 1rem;
  }
  .avatar {
    display: block;
    width: 200px;
    border-radius: 10%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px 0, rgba(0, 0, 0, 0.12) 0 2px 10px 0;
  }
  .text-align-left {
    text-align: left;
  }
  .name {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: 'Noto Serif SC', serif;
  }
  .brief {
    font-size: 1rem;
    line-height: 1.5rem;
    display: block;
    margin: 1rem auto;
  }
  @media screen and (max-width: $--screen-md-min) {
    .col {
      padding: 0;
      &.color-content {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
