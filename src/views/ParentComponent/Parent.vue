<template>
  <div>
    <Children :visible="modalVisible" @close="drawerClose" />
    <n-button type="primary" @click="modalVisible = true"> 打开模态框 </n-button>
  </div>
</template>

<script>
import Children  from '@/views/ParentComponent/Children'
export default {
  name: "Parent",
  components: {
    Children
  },
  data () {
    return {
      modalVisible: false
    }
  },
  methods: {
    drawerClose(){
      this.modalVisible = false
    }
  }
}
</script>

<style scoped>

</style>
