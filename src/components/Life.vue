<template>
  <div class="life-root">
    <span>本页面仍在开发中...</span>
    <a-table :columns="columns" :data-source="data" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const LifeData = {
  // TODO
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      }
    ],
    onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    filterMultiple: false,
    onFilter: (value: any, record: any) => record.address.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend']
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

@Component({
  components: {}
})
export default class extends Vue {
  columns = columns
  data = data
}
</script>

<style scoped lang="less">
.life-root {
  height: 100vh;
  margin: 20px;
  span {
    display: block;
    width: 100%;
    background-color: rgb(230, 1, 1);
    color: #fff;
  }
}
</style>
