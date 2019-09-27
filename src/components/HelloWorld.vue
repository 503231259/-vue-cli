<template>
  <el-time-select
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间"
  ></el-time-select>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
