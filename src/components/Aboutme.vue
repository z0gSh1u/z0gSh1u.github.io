<template>
  <div class="about">
    <a-row type="flex" justify="center" align="middle">
      <!-- 头像 -->
      <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="6">
        <img class="avatar" draggable="false" src="../assets/photo.jpg" />
      </a-col>
      <!-- 内容 -->
      <a-col class="color-content text-align-left col" :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <!-- 简介 -->
        <span class="name black"> Zhuo Xu (卓旭) </span>
        <span class="brief black">
          I'm currently working for my Master Degree in
          <a href="https://www.seu.edu.cn" target="_blank">Southeast University (China)</a>. I now focus mainly on
          Cone-Beam CT (CBCT) image processing and reconstruction supervised by
          <a href="https://cse.seu.edu.cn/2019/0102/c23024a256991/page.htm" target="_blank"> Prof. Yang Chen </a>.
          Before this, I graduated from Southeast University majoring in Computer Science and Enginerring in 2021, and
          finished an internship with full-member qualification in Tencent (Shenzhen)'s PCG as a frontend developer in
          2020.
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
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <span class="section-title">Educations</span>
        <a-list item-layout="horizontal" :data-source="eduExps">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="edu-item">
            <a-list-item-meta :description="item.desc">
              <img slot="avatar" :src="item.icon" />
              <span slot="title">{{ item.school }}</span>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <span class="section-title">Jobs</span>
        <a-list item-layout="horizontal" :data-source="workExps">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="work-item">
            <a-list-item-meta :description="item.desc">
              <img slot="avatar" :src="item.icon" />
              <span slot="title">{{ item.place }}</span>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>

    <a-divider />

    <a-row type="flex" justify="center" align="top" class="section">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <span class="section-title">Publications</span>
        <a-list item-layout="horizontal" :data-source="publications">
          <a-list-item slot="renderItem" slot-scope="item" key="item._key" class="pub-item">
            <a-list-item-meta :description="item.place + ' / ' + item.authors">
              <a slot="title" :href="item.url" v-if="item.url !== '#'" target="_blank">{{ item.title }}</a>
              <span slot="title" v-else>{{ item.title }}</span>
            </a-list-item-meta>
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
export default class extends Vue {
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
      title: 'Zhihu',
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
      title: 'Blog @ cnblogs',
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
      title: 'bilibili',
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
      title: 'QZone',
      url: 'https://user.qzone.qq.com/136371391',
      fgc: '#fff',
      bgc: 'rgb(0,163,255)',
      icon: require('@/assets/icons/qzone.png')
    },
    {
      title: 'zhuoxu',
      url: '#',
      fgc: '#fff',
      bgc: 'rgb(60,176,53)',
      icon: require('@/assets/icons/wechat.png')
    },
    {
      title: 'z0gSh1u',
      url: 'https://steamcommunity.com/id/zhuoxu/',
      fgc: '#fff',
      bgc: 'rgb(30,36,47)',
      icon: require('@/assets/icons/steam.png')
    },
    {
      title: 'SW-0432-5008-1243',
      url: '#',
      fgc: '#fff',
      bgc: 'rgb(114,206,165)',
      icon: require('@/assets/icons/ns.png')
    },
    {
      title: 'Cirriculum Vitae (WIP)',
      url: 'https://zxuuu.tech/static/cv-zhuoxu.pdf',
      fgc: '#fff',
      bgc: 'rgb(136,189,243)',
      icon: require('@/assets/icons/cv.png')
    }
  ])
  // 教育经历
  eduExps = _withKeys([
    {
      school: 'Southeast University (东南大学)',
      desc: 'Master / 影像科学与技术 / 2021~',
      icon: require('@/assets/icons/seu-icon.png')
    },
    {
      school: 'Université de Rennes 1',
      desc: 'Master / Signal and Image Processing (Joint Degree) / 2021~',
      icon: require('@/assets/icons/rennes1-icon.png')
    },
    {
      school: 'Southeast University (东南大学)',
      desc: 'Undergraduate / 计算机科学与技术 / 2017~2021',
      icon: require('@/assets/icons/seu-icon.png')
    }
  ])
  // 工作经历
  workExps = _withKeys([
    {
      place: 'First Imaging (一影医疗)',
      desc: 'Intern / 2021.06~07',
      icon: require('@/assets/icons/first-imaging.png')
    },
    {
      place: 'Tencent (腾讯)',
      desc: 'Frontend Developer (Intern) / 2020.06~08',
      icon: require('@/assets/icons/tencent.png')
    }
  ])
  // 著作
  publications = _withKeys([
    {
      title: '基于深度学习的图像超分辨率重建及其在医学影像上的应用',
      place: '东南大学本科优秀毕业设计（论文）',
      authors: '卓旭',
      url: 'https://github.com/z0gSh1u/graduation-project'
    },
    {
      title: '一种基于概率优化和神经网络的内窥镜去雾方法及装置',
      place: '发明专利，ZL 202010370770.0',
      authors: '汪彦刚 陈阳 卓旭 高钰铭 王志华',
      url: 'http://www.soopat.com/Patent/202010370770'
    },
    {
      title: 'Real-Time Endoscopy Haze Removal: A Synthetical Method',
      place: 'MTAP (In Revision)',
      authors: 'Xu Zhuo et al.',
      url: '#'
    },
    {
      title: 'NTIRE 2021 Challenge on Video Super-Resolution',
      place: 'arXiv 2104.14852',
      authors: 'Sanghyun Son, ..., Xu Zhuo, ...',
      url: 'https://arxiv.org/abs/2104.14852'
    }
  ])
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
