<template>
  <div>
    <input v-model="searchValue" style="width:200px;" type="input" placeholder="输入搜索内容"/>
    <br>
    <n-button type="info" @click="setOrderType(1)">年龄升序</n-button>
    <n-button type="info" @click="setOrderType(2)">年龄降序</n-button>
    <n-button type="info" @click="setOrderType(0)">还原</n-button>
    <li v-for="(item,index) in filterPerson" :key="item.id">
      {{ index + 1 }}-{{ item.name + ' ' + item.age }}
    </li>
  </div>
</template>

<script>
export default {
  name: "ForIf",
  data() {
    return {
      persons: [
        {id: 2016, name: '张三', age: 23},
        {id: 2017, name: '李四', age: 20},
        {id: 2018, name: '王五', age: 21},
        {id: 2019, name: '赵六', age: 19},
      ],
      searchValue: '',
      orderType: 0
    }
  },
  computed: {
    filterPerson() {
      // 方法一
      // 取出相关属性
      const {persons, searchValue, orderType} = this
      // 定义过滤数组
      let arr = [...persons]
      // 根据条件过滤
      if (searchValue.trim()) {
        arr = persons.filter((p) => {
          return p.name.indexOf(searchValue) !== -1
        })
      }
      if (orderType) {
        arr.sort((p1, p2) => {
          if (orderType === 1) {
            return p1.age - p2.age
          } else {
            return p2.age - p1.age
          }
        })
      }
      // 返回过滤后的数组
      return arr
      // 方法二
      // return this.persons.filter((item) => {
      //   return item.name.match(this.searchValue)
      // })
    }
  },
  methods: {
    setOrderType(orderType) {
      this.orderType = orderType
    }
  }
}
</script>

<style scoped>

</style>
