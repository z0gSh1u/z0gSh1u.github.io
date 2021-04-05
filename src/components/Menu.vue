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
        <!-- 根据配置动态模块的内容和顺序 -->
        <a-menu-item v-for="m in menus" v-bind:key="m.id">
          <router-link :to="m.id">{{ m.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <!-- 菜单页脚 -->
    <a-layout-footer class="footer">
      <!-- 版权 -->
      <span>©2021 zxuuu.tech 苏ICP备18044844号 / 基于 vuesume</span>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { mapGetters } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapGetters(['banner'])
  }
})
export default class Menu extends Vue {
  private closeMenuDrawer() {
    this.$emit('menuClick')
  }

  menus = [
    {
      id: 'aboutme',
      name: '关于我'
    }
  ]
}
</script>

<style scoped lang="scss">
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
  }

  .footer {
    padding: 10px;
    margin-bottom: 1rem;
    * {
      color: $--color-gray;
    }

    & > div {
      margin: 0.5rem auto;
    }
  }
}
</style>
