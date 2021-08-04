<template>
  <div>
    <Common :getDate="date" :person="propPerson" @showPerson="showPerson"></Common>
  </div>
</template>

<script>
import Moment from 'moment'
import Common  from '@/components/Common'
export default {
  name: "DateFormatDemo",
  components:{
    Common
  },
  data() {
    return {
      date: new Date(),
      person: [
        {id: 1, name: '赵云'},
        {id: 2, name: '刘备'},
        {id: 3, name: '关羽'},
        {id: 4, name: '张飞'},
      ],
      propPerson: []
    }
  },
  filters: {
    dateFormat: function (date) {
      return Moment(date).format("YYYY-MM-DD")
    }
  },
  methods: {
    showPerson(){
      this.propPerson = this.person
    }
  }
}
</script>

<style scoped>

</style>
