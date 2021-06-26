<template>
  <div>
    <h2>
      <n-tag type="info">计算属性-会员总积分：
        {{ totalScore }}
      </n-tag>
    </h2>
    <h2>
      <n-tag type="info">函数-会员总积分：
        {{ getTotalScore() }}
      </n-tag>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      members: [
        {id: 1, name: '张三', score: 12},
        {id: 2, name: '李四', score: 11},
        {id: 3, name: '王五', score: 16},
        {id: 4, name: '赵六', score: 12},
      ]
    }
  },
  computed: {
    totalScore() {
      let sum = 0
      for (let member of this.members) {
        sum += member.score
      }
      return sum
    }
  },
  methods: {
    getTotalScore() {
      let sum = 0
      for (let i = 0; i < this.members.length; i++) {
        sum += this.members[i].score
      }
      return sum
    }
  }
}
</script>

<style scoped>

</style>
