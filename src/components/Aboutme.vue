<template>
  <div class="about">
    <a-row type="flex" justify="center" align="middle">
      <!-- 头像 -->
      <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="6">
        <img class="avatar" draggable="false" src="../assets/photo.png" />
      </a-col>
      <!-- 内容 -->
      <a-col class="color-content text-align-left col" :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <!-- 简介 -->
        <span class="name black">
          卓旭
        </span>
        <span class="brief black">
          我正在东南大学就读计算机科学与技术专业（本科大四），主要兴趣在 Web 开发领域。我于 2020
          年暑期在腾讯公司（深圳）PCG 事业群进行了前端开发岗实习，并获得留用资格。2021 年 9
          月，我将以推荐免试研究生的身份在本校继续攻读硕士学位，
          研究方向为医学影像处理。因此，近期我还在系统地学习计算机视觉与深度学习相关理论。 我的主要技术栈是
          TypeScript、Vue.js、Node.js、Python、PyTorch，并且乐于学习新的技术。
        </span>
      </a-col>
    </a-row>

    <a-row type="flex" justify="center" align="middle" class="section section-first">
      <a-col :xs="20" :sm="20" :md="20" :lg="16" :xl="16">
        <a-list
          item-layout="horizontal"
          :data-source="socialNetworks"
          :grid="{ gutter: 4, column: 4 }"
          class="social-list"
        >
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="social-item">
            <template>
              <a :href="item.url" target="_blank" v-if="item.url !== '#'">
                <div :style="{ backgroundColor: item.bgc }" class="social-item-container">
                  <img :src="item.icon" />&nbsp;
                  <span :style="{ color: item.fgc }">{{ item.title }}</span>
                </div>
              </a>
              <div :style="{ backgroundColor: item.bgc }" class="social-item-container" v-else>
                <img :src="item.icon" />&nbsp;
                <span :style="{ color: item.fgc }">{{ item.title }}</span>
              </div>
            </template>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>

    <a-divider />

    <a-row type="flex" justify="center" align="top" class="section">
      <a-col :xs="22" :sm="22" :md="22" :lg="12" :xl="12">
        <span class="section-title">教育经历</span>
        <a-list item-layout="horizontal" :data-source="eduExps">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="edu-item">
            <a-list-item-meta :description="item.desc">
              <img slot="avatar" :src="item.icon" />
              <a slot="title">{{ item.school }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :xs="22" :sm="22" :md="22" :lg="12" :xl="12">
        <span class="section-title">工作经历</span>
        <a-list item-layout="horizontal" :data-source="workExps">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="work-item">
            <a-list-item-meta :description="item.desc">
              <img slot="avatar" :src="item.icon" />
              <a slot="title">{{ item.place }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>

    <a-divider />

    <a-row type="flex" justify="center" align="top" class="section">
      <a-col :xs="20" :sm="20" :md="20" :lg="12" :xl="12">
        <span class="section-title">著作</span>
        <a-list item-layout="horizontal" :data-source="publications">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="pub-item">
            <a-list-item-meta :description="item.place + ' / ' + item.authors">
              <a slot="title" :href="item.url">{{ item.title }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :xs="20" :sm="20" :md="20" :lg="12" :xl="12">
        <span class="section-title">（比较好看的）课程成绩</span>
        <a-list item-layout="horizontal" :data-source="scores" :grid="{ gutter: 2, column: 2 }">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="score-item">
            <template>
              <a-col span="24">
                <a-statistic :title="item.course" :value="item.score" class="demo-class">
                  <template #suffix>
                    <span>{{ item.suffix || ' / 100' }}</span>
                  </template>
                </a-statistic>
              </a-col>
            </template>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

function _withKeys(arr: { [key: string]: any }[]) {
  return arr.map((v, _key) => Object.assign(v, { _key }))
}

@Component({
  components: {}
})
export default class App extends Vue {
  // 社交网络
  socialNetworks = _withKeys([
    {
      title: 'zx.cs@qq.com',
      url: 'mailto:zx.cs@qq.com',
      fgc: '#fff',
      bgc: 'rgba(51,153,102,0.8)',
      icon: require('@/assets/icons/email.png')
    },
    {
      title: '知乎',
      url: 'https://www.zhihu.com/people/zhuoxu',
      fgc: '#fff',
      bgc: 'rgba(6,100,195,0.8)',
      icon: require('@/assets/icons/zhihu.png')
    },
    {
      title: 'GitHub',
      url: 'https://github.com/z0gSh1u',
      fgc: '#fff',
      bgc: 'rgba(0,0,0,0.8)',
      icon: require('@/assets/icons/github.png')
    },
    {
      title: '博客园',
      url: 'https://cnblogs.com/zxuuu',
      fgc: '#fff',
      bgc: 'rgb(98,122,173)',
      icon: require('@/assets/icons/cnblogs.png')
    },
    {
      title: '500px',
      url: 'https://500px.com/p/136371391',
      fgc: '#fff',
      bgc: 'rgb(8,112,209)',
      icon: require('@/assets/icons/500px.png')
    },
    {
      title: '哔哩哔哩',
      url: 'https://space.bilibili.com/530258',
      fgc: '#fff',
      bgc: 'rgb(251,114,153)',
      icon: require('@/assets/icons/bilibili.png')
    },
    {
      title: '136371391',
      url: '#',
      fgc: '#fff',
      bgc: 'rgb(0,169,221)',
      icon: require('@/assets/icons/qq.png')
    },
    {
      title: 'zhuoxu',
      url: '#',
      fgc: '#fff',
      bgc: 'rgb(60,176,53)',
      icon: require('@/assets/icons/weixin.png')
    },
    {
      title: 'z0gSh1u',
      url: 'https://steamcommunity.com/id/zhuoxu/',
      fgc: '#fff',
      bgc: 'rgb(30,36,47)',
      icon: require('@/assets/icons/steam.png')
    },
    {
      title: 'SW-0432-5008-****',
      url: '#',
      fgc: '#fff',
      bgc: 'rgb(114,206,165)',
      icon: require('@/assets/icons/ns.png')
    },
    {
      title: '简历',
      url: 'http://101.132.143.124:8008/static/cv-zhuoxu-zhcn.pdf',
      fgc: '#fff',
      bgc: 'rgb(87,149,241)',
      icon: require('@/assets/icons/cv.png')
    },
    {
      title: 'Resume (CV)',
      url: 'http://101.132.143.124:8008/static/cv-zhuoxu-enus.pdf',
      fgc: '#fff',
      bgc: 'rgb(136,189,243)',
      icon: require('@/assets/icons/cv.png')
    }
  ])
  // 教育经历
  eduExps = _withKeys([
    {
      school: '东南大学',
      desc: '本科 / 计算机科学与技术 / 2017~至今',
      icon: require('@/assets/icons/seu-icon.png')
    }
  ])
  // 工作经历
  workExps = _withKeys([
    {
      place: '腾讯',
      desc: '前端开发 / 暑期实习 / 2020.06~08',
      icon: require('@/assets/icons/tencent.png')
    }
  ])
  // 著作
  publications = []
  // 成绩
  scores = [
    ['程序设计基础及语言A', 98],
    ['语言课程设计', 99],
    ['信号与系统', 92],
    ['概率论与数理统计A', 96],
    ['计算机图形学', 100],
    ['数字图像处理', 100],
    ['数字信号处理', 94],
    ['VLSI系统导论', 97],
    ['数据库原理', 98],
    ['编译原理课程设计', 96],
    ['计算机系统综合课程设计', 98]
  ].map((v, _key) => ({
    _key,
    course: v[0],
    score: v[1],
    suffix: v.length > 2 ? v[2] : void 0
  }))

  created() {}
}
</script>

<style scoped lang="less">
@import '../styles/variable';
@import '../styles/NotoSerifSC500.css';

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

  .work-item,
  .edu-item {
    box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px 0, rgba(0, 0, 0, 0.12) 0 2px 10px 0;
    background-color: #fff;
    padding: 1rem;
    margin: 1.5rem;
    span {
      display: block;
    }
    img {
      max-height: 45px;
      width: auto;
    }
  }

  .pub-item {
    text-align: left;
    padding-left: 1.8rem;
    .ant-list-item-meta-title {
      font-weight: bold;
    }
  }

  .social-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    a {
      text-decoration: none;
    }
    .social-item-container {
      padding: 0.5rem 0.75rem;
      margin: 0 2px;
      img {
        height: 30px;
        max-width: 100px;
        margin-right: 5px;
      }
    }
  }

  .section {
    padding: 1rem;
    .section-title {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &.section-shadow {
      background-color: rgba(0, 0, 0, 0.02);
    }
    &.section-first {
      margin-top: 1.5rem;
    }
  }

  @media screen and (max-width: @--screen-md-min) {
    .col {
      padding: 0;
      &.color-content {
        margin-top: 1.5rem;
      }
    }
    .section-title {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
