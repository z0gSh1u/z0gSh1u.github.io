<template>
  <div class="calendar">
    <div class="responsive-iframe-container big-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FShanghai&showTitle=0&showTz=1&showCalendars=0&showPrint=0&showNav=1&showTabs=1&src=YzExMTkwMkBnbWFpbC5jb20&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4&color=%230B8043"
        style="border-width: 0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div class="responsive-iframe-container small-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FShanghai&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&src=YzExMTkwMkBnbWFpbC5jb20&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4&color=%230B8043"
        style="border-width: 0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <p class="calendar-hint">如果没有内容显示，请检查你与Google日历的连接。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped lang="less">
@import "../styles/variables.less";
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
