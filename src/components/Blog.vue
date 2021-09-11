<template>
  <div class="blog">
    <a :href="cnblogUrl" target="_blank" class="cnblog-redirect">z0gSh1u's Blog</a>
    <a-list itemLayout="vertical" size="large" :dataSource="blogs" :loading="!blogs.length">
      <a-list-item data-aos="fade-in" slot="renderItem" slot-scope="item" key="item._key">
        <a-list-item-meta>
          <template slot="description">
            <div class="description">
              <a class="title" slot="title" :href="item.url" target="_blank">{{ item.title }}</a>
              &nbsp;&nbsp;
              <span class="pub-date">{{ item.time | _formatDatetime }}</span>
            </div>
          </template>
        </a-list-item-meta>
        <span class="desc">{{ item.summary }} ...</span>
      </a-list-item>
    </a-list>
    <div style="width:100%;text-align:right;">
      <a :href="cnblogUrl" target="_blank" style="text-decoration:none;">更多...</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface BlogRecord {
  _key: number
  time: string
  title: string
  summary: string
  url: string
}

@Component({
  filters: {
    _formatDatetime: (time: string) => new Date(time).toLocaleDateString()
  }
})
export default class extends Vue {
  cnblogUrl = 'https://www.cnblogs.com/zxuuu/'
  blogs: BlogRecord[] = []

  async initBlogs() {
    const rssUrl = './phpapi/cnblogs-rss-to-json.php'
    const rssJSON = JSON.parse(await (await fetch(rssUrl, { method: 'get', mode: 'cors' })).text())
    // @ts-ignore
    const recentBlogs = rssJSON['entry'].slice(0, 10).map((v, i) => ({
      _key: i,
      title: v.title.replace(/(.+)\s-\sz0gSh1u$/, '$1'),
      time: v.updated,
      summary: v.summary,
      url: v.id
    }))
    this.blogs = recentBlogs
  }

  created() {
    this.initBlogs()
  }
}
</script>

<style scoped lang="less">
@import '../styles/variable';

.cnblog-redirect {
  color: #000;
  font-size: 24px;
  font-family: Georgia;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-right: 8px;
}

.blog {
  text-align: left;
  padding: 20px 30px;
  .description {
    * {
      margin-right: 4px;
    }
    .title {
      color: #000;
      font-weight: 600;
      font-size: 1.2em;
    }
    .pub-date {
      font-size: 1em;
      color: @--color-gray;
    }
  }
  .desc {
    color: @--color-gray;
    padding-left: 0em;
    display: inline-block;
  }
  @media screen and (max-width: @--screen-sm-min) {
    .description {
      .tag {
        display: block;
      }
    }
    .desc {
      display: none;
    }
  }
}
</style>
