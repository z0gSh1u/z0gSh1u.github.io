<template>
  <a-layout>
    <!-- 内容 -->
    <a-layout>
      <!-- 菜单 -->
      <a-layout-sider class="layout-sider" width="310"
        ><a-affix><Menu /></a-affix
      ></a-layout-sider>
      <!-- 正文部分 -->
      <a-layout class="layout-content">
        <!-- 小屏侧边栏抽屉按钮 -->
        <a-affix>
          <a-button
            :class="{
              'sider-menu-trigger': true,
              'drawer-closed': !menuDrawerVisible,
              'drawer-open': menuDrawerVisible
            }"
            shape="circle"
            size="large"
            :icon="menuDrawerVisible ? 'arrow-left' : 'bars'"
            @click="toggleMenuDrawer"
          ></a-button>
        </a-affix>
        <!-- 正文 -->
        <router-view></router-view>
      </a-layout>
    </a-layout>

    <!-- 小屏侧边栏抽屉 -->
    <a-drawer placement="left" :closable="true" :visible="menuDrawerVisible" @close="onMenuDrawerClose">
      <Menu @menuClick="onMenuDrawerClose" />
    </a-drawer>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class Home extends Vue {
  menuDrawerVisible = false

  toggleMenuDrawer() {
    this.menuDrawerVisible = !this.menuDrawerVisible
  }

  onMenuDrawerClose() {
    this.menuDrawerVisible = false
  }
}
</script>

<style scoped lang="less">
@import '../styles/variable';

.layout-header {
  z-index: 0;
  height: 100vh;
  overflow: auto;
  padding: 0;
}

.layout-content {
  position: relative;
}

.sider-menu-trigger {
  position: absolute;
  top: 20px;
  z-index: 99999;

  &.drawer-closed {
    left: 20px;
  }

  &.drawer-open {
    left: 276px;
  }
}

@media screen and (max-width: @--screen-md-min) {
  .layout-sider {
    display: none;
  }
}

@media screen and (min-width: @--screen-md-min) {
  .sider-menu-trigger {
    display: none;
  }

  .layout-sider {
    box-shadow: 1px 0 5px #e0e0e0;
    z-index: 999;
  }
}
</style>
