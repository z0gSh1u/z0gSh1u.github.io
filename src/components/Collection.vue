<template>
  <div class="life-root">
    <i
      >This page collects parts of things that I've ever tried in this world, and some of them have my personal
      comments.</i
    >
    <div class="life-record" v-for="(record, idx1) in this.lifeRecords" :key="idx1">
      <p class="life-record-title">{{ record.type }}</p>
      <table class="responstable">
        <thead style="display: none">
          <th style="width: 25%"></th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(item, idx2) in record.items" :key="idx2">
            <td style="width: 15%">{{ item.length >= 2 && item[1] == 'star' ? '👍' : '' }}</td>
            <td v-if="item.length >= 3">
              <a :href="item[2]" target="_blank">{{ item[0] }}</a>
            </td>
            <td v-else>{{ item[0] }}</td>
          </tr>
        </tbody>
      </table>
      <a-divider></a-divider>
    </div>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface LifeRecord {
  type: string
  items: [string[]][]
}

@Component({
  components: {}
})
export default class extends Vue {
  lifeRecords: LifeRecord[] = []

  async loadLifeRecords() {
    this.lifeRecords = await (await fetch('/collectionData.json', { method: 'get', mode: 'cors' })).json()
  }

  created() {
    this.loadLifeRecords()
  }
}
</script>

<style scoped lang="less">
@import '../styles/respontable.less';

.life-root {
  font-size: 14px;
  height: 100vh;
  margin: 1em 3em;
  .life-record {
    margin: 10px auto;
    table {
      width: 100%;
      font-size: 1.1em;
    }
    .life-record-title {
      font-weight: bold;
      font-size: 1.75em;
      margin-bottom: 0;
    }
  }
}
</style>
