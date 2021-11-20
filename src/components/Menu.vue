<!-- 菜单 -->

<template>
  <a-layout class="layout-menu">
    <!-- 头像 -->
    <div class="header">
      <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
        <img draggable="false" src="../assets/avatar.png" />
      </span>
      <span>{{ 'z0gSh1u' }}</span>
    </div>
    <!-- 菜单 -->
    <a-layout-content class="menu">
      <a-menu>
        <a-menu-item v-for="m in menus" v-bind:key="m._key" class="menu-item">
          <router-link :to="m.path" @click.native="closeMenuDrawer">{{ m.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <!-- 菜单页脚 -->
    <a-layout-footer class="footer">
      <!-- 版权 -->
      <div class="used-services">
        <span>基于 </span>
        <a href="https://github.com/manerfan/vuesume" target="_blank">vuesume</a><br /><span>使用 </span>
        <a href="https://www.ucloud.cn/" target="_blank">UCloud 云服务器</a><span> 和 </span>
        <a href="https://www.cloudflare.com/" target="_blank">Cloudflare CDN</a>
      </div>
      <span>© 2021&nbsp;<a href="https://zxuuu.tech" target="_blank">zxuuu.tech</a></span>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Menu extends Vue {
  closeMenuDrawer() {
    this.$emit('menuClick')
  }

  menus = [
    {
      _key: 0,
      path: '/',
      name: '关于我'
    },
    {
      _key: 1,
      path: 'blog',
      name: '博客'
    },
    {
      _key: 2,
      path: 'calendar',
      name: '日历排期'
    },
    {
      _key: 3,
      path: 'life',
      name: '生活记录'
    }
  ]
}
</script>

<style scoped lang="less">
@import '../styles/variable';

.layout-menu {
  width: 100%;
  height: 100vh;
  text-align: center;

  .header,
  .menu,
  .footer {
    background-color: white !important;
  }

  .header {
    margin: 2rem auto;
    .avatar {
      width: 180px;
      height: 180px;
      line-height: 180px;
    }
    span {
      display: block;
      margin-top: 0.5rem;
      font-size: 2em;
      font-weight: 700;
      color: #000;
    }
  }

  .menu {
    * {
      font-size: 1.2em;
    }

    a {
      display: inline;
    }

    .menu-item {
      text-align: center;
      margin: 1.5rem;
    }
  }

  .footer {
    padding: 10px;
    margin-bottom: 1rem;
    * {
      color: @--color-gray;
    }

    & > div {
      margin: 0.5rem auto;
    }

    .used-services {
      a {
        font-style: italic;
      }
      margin: 0;
      line-height: 1.4;
      font-size: 0.9em;
    }
  }
}
</style>
