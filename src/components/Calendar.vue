<template>
  <div id="calendar">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%237986CB&ctz=Asia%2FShanghai&showTitle=1&title=Public%20Calendar%20of%20Xu%20Zhuo&mode=MONTH&showNav=1&showPrint=0&showTabs=1&showCalendars=0&src=YzExMTkwMkBnbWFpbC5jb20&color=%234285F4"
      style="border-width:0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
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
  margin-right: 1rem;
  margin-top: 1rem;
}
</style>
