<template>
  <div id="calendar">
    <div class="responsive-iframe-container big-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23a0d8ef&ctz=Asia%2FShanghai&showTitle=0&showNav=1&mode=MONTH&showTabs=1&showCalendars=0&showPrint=0&showDate=1&src=YzExMTkwMkBnbWFpbC5jb20&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4&color=%230B8043"
        style="border-width:0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div class="responsive-iframe-container small-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23a0d8ef&ctz=Asia%2FShanghai&showTitle=0&showNav=0&mode=AGENDA&showTabs=1&showCalendars=0&showPrint=0&showDate=1&src=YzExMTkwMkBnbWFpbC5jb20&src=emguY2hpbmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4&color=%230B8043"
        style="border-width:0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <p class="calendar-hint">Check your connection to Google if nothing displays.</p>
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
  padding: 0.5rem;
  height: 100%;
}
.calendar-hint {
  font-size: 0.5rem;
  text-align: right;
  margin-right: 0.25rem;
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
  // padding-bottom: 56.25%;
  padding-top: 0px;
  height: calc(100% - 1rem);
  width: 95%;
  // margin: calc(1rem + 40px) auto 0 auto;
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
