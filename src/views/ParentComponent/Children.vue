<template>
  <div>
    <n-drawer :show="visible" :width="600">
      <n-drawer-content title="斯通纳" closable>
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
      <n-button type="default" @click="onClose">取消</n-button>
      <n-button type="primary" @click="submitForm">确定</n-button>
    </n-drawer>
  </div>
</template>

<script>
export default {
  name: "Children",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onClose(){
      this.$emit('close')
    },
    submitForm(){}
  }
}
</script>

<style scoped>

</style>
