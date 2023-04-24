<template>
  <div class="calendar">
    <div class="loading" v-show="loading">
      <img src="/assets/loading.svg" />
    </div>
    <div class="responsive-iframe-container big-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FShanghai&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
        style="border-width: 0"
        frameborder="0"
        scrolling="no"
        @load="loading = false"
      ></iframe>
    </div>
    <div class="responsive-iframe-container small-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FShanghai&mode=WEEK&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
        style="border-width: 0"
        frameborder="0"
        scrolling="no"
        @load="loading = false"
      ></iframe>
    </div>
    <p class="calendar-hint">
      如果没有内容显示，请检查你与 Google 日历的连接。
    </p>
    <p class="calendar-hint">
      <a href="https://loading.io/icon/" target="_blank"
        >icon 'loading' from loading.io</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    let loading = ref(true)
    return {
      loading,
    }
  },
})
</script>

<style scoped lang="less">
@import '../styles/variables.less';
.loading {
  width: 3rem;
}
.calendar {
  width: 100%;
  height: calc(~'100vh - 17rem');
  .calendar-hint {
    font-size: 0.5rem;
    text-align: right;
    margin-right: 0.25rem;
  }
}
@media (max-width: @ResponsiveScreenWidth) {
  .big-container {
    display: none;
  }
}
@media (min-width: @ResponsiveScreenWidth) {
  .small-container {
    display: none;
  }
}
/* https://stackoverflow.com/questions/5925629/ */
.responsive-iframe-container {
  position: relative;
  height: calc(100% - 1rem);
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  iframe,
  object,
  embed {
    width: 100%;
    height: 100%;
  }
}
</style>
