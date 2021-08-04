<template>
  <div>
    <n-card title="卡片">
      <n-table :bordered="false" :single-line="false">
        <thead>
        <tr>
          <th>Abandon</th>
          <th>Abormal</th>
          <th>Abolish</th>
          <th>万事开头难</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td format="yyyy-MM-dd">
            <n-time :time="0" format="yyyy-MM-dd">{{ getDate }}</n-time>
          </td>
          <td>1</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td v-for="item in person" :key="item.id" :value="item.id">{{ item.name }}</td>
        </tr>
        </tbody>
      </n-table>
      <n-button type="success" @click="showPerson">显示用户</n-button>
    </n-card>
  </div>
</template>

<script>
export default {
  name: "Common",
  props: {
    getDate: {
      type: Date
    },
    person: {
      type: Object,
      default: () => {
      }
    }
  },
  methods:{
    showPerson(){
      this.$emit('showPerson')
    }
  }
}
</script>

<style scoped>

</style>
