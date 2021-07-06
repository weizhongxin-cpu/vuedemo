<template>
  <div>
    <n-form
        inline
        :label-width="80"
        :model="form"
        ref="formRef"
    >
      <n-form-item label="输入数据" path="name">
        <n-input v-model:value="form.name" placeholder="输入数据"/>
      </n-form-item>
      <n-form-item label="修改后" path="name">
        <n-input v-model:value="form.changeName" placeholder="即将显示"/>
      </n-form-item>
      <n-form-item>
        <n-button @click="changeN" attr-type="button">提交</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
export default {
  name: "V-Model-1",
  data() {
    return {
      form: {
        name: '',
        changeName: 'sss'
      }
    }
  },
  methods: {
    changeN() {
      this.form.changeName = this.form.name
      console.log(this.form.changeName)
    }
  }
}
</script>

<style scoped>

</style>
