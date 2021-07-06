<template>
  <div>
    <n-table :bordered="false" :single-line="false">
      <thead>
      <tr>
        <th>Abandon</th>
        <th>Abormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我背的是啥</td>
      </tr>
      <tr>
        <td format="yyyy-MM-dd"><n-time :time="0" format="yyyy-MM-dd">{{ date }}</n-time></td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script>
import Moment from 'moment'
export default {
  name: "DateFormatDemo",
  data(){
    return {
      date: new Date()
    }
  },
  methods: {
    dateFormat:function(date){
      return Moment(date).format("YYYY-MM-DD")
    }
  }
}
</script>

<style scoped>

</style>
