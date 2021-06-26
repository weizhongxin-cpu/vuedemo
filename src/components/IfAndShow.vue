<template>
  <div>
    <n-tag type="success" v-if="flag">v-if-明天休息</n-tag>
    <n-tag type="info" v-else>v-if-明天工作</n-tag>
    <n-button type="primary" @click="flag = !flag">切换状态</n-button>
    <n-tag type="success" v-show="flag">v-show-明天休息</n-tag>
    <n-tag type="info" v-show="!flag">v-show-明天工作</n-tag>
  </div>
</template>

<script>
export default {
  name: "IfAndShow",
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style scoped>

</style>
