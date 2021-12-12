<template>
  <div id="calendar">
    <div class="responsive-iframe-container big-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23A0D8EF&ctz=Asia%2FShanghai&showTitle=1&title=Public%20Calendar%20of%20Xu%20Zhuo&mode=MONTH&showNav=1&showPrint=0&showTabs=1&showCalendars=0&src=YzExMTkwMkBnbWFpbC5jb20&color=%234285F4"
        style="border-width:0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div class="responsive-iframe-container small-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23A0D8EF&ctz=Asia%2FShanghai&showTitle=1&title=Public%20Calendar%20of%20Xu%20Zhuo&mode=AGENDA&showNav=1&showPrint=0&showTabs=1&showCalendars=0&src=YzExMTkwMkBnbWFpbC5jb20&color=%234285F4"
        style="border-width:0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <p class="calendar-hint">本页面使用 Google 服务，如无法正常显示日历，请检查与 Google 的连接。</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Calendar extends Vue {}
</script>

<style lang="less">
#calendar {
  padding: 1rem;
}
.calendar-hint {
  font-size: 0.5rem;
  text-align: right;
  margin-right: 0.25rem;
  margin-top: 1rem;
}
@media (max-width: 720px) {
  .big-container {
    display: none;
  }
}
@media (min-width: 720px) {
  .small-container {
    display: none;
  }
}
/* Responsive iFrame */
/* https://stackoverflow.com/questions/5925629/ */
.responsive-iframe-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0px;
  height: 0;
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
}
.responsive-iframe-container iframe,
.responsive-iframe-container object,
.responsive-iframe-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
