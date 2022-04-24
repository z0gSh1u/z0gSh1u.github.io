<!-- 菜单 -->

<template>
  <a-layout class="layout-menu">
    <!-- 头像 -->
    <div class="header">
      <img draggable="false" src="../../public/assets/avatar.png" class="avatar" />
      <span>{{ 'z0gSh1u' }}</span>
    </div>
    <!-- 菜单 -->
    <a-layout-content class="menu">
      <a-menu>
        <a-menu-item v-for="m in menus" v-bind:key="m._key" class="menu-item">
          <router-link :to="m.path" @click="closeMenuDrawer">{{ m.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <!-- 菜单页脚 -->
    <a-layout-footer class="footer">
      <!-- 版权 -->
      <div class="used-services">
        <span>Based on </span>
        <a href="https://github.com/manerfan/vuesume" target="_blank">vuesume</a><br /><span>Using </span>
        <a href="https://www.ucloud.cn/" target="_blank">UCloud Server</a><span> and </span>
        <a href="https://www.cloudflare.com/" target="_blank">Cloudflare CDN</a>
      </div>
      <span>© 2022&nbsp;<a href="https://zxuuu.tech" target="_blank">zxuuu.tech</a></span>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    closeMenuDrawer() {
      this.$emit('menuClick')
    }
  },
  data() {
    return {
      menus: [
        {
          _key: 0,
          path: '/',
          name: 'About Me'
        },
        {
          _key: 1,
          path: 'blog',
          name: 'Blog'
        },
        {
          _key: 2,
          path: 'calendar',
          name: 'Calendar'
        },
        {
          _key: 3,
          path: 'collection',
          name: 'Collection'
        }
      ]
    }
  }
})
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
      border-radius: 50%;
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
      font-size: 1.6em;
    }

    a {
      display: inline;
    }

    .menu-item {
      text-align: center;
      margin: 1.3rem;
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
