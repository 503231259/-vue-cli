<template>
  <div>
    <el-time-select v-model="value"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="选择时间"></el-time-select>
    <div class="a">
    <div>a</div>
    </div>
  </div>
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

<style scoped lang="scss">
.a {
  width: 50px;
  height: 50px;
  background: #333;
  div {
    width: 20px;
    height: 20px;
    background: #fff;
  }
}
</style>
