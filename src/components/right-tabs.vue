<template>
  <div class="box">
    <p><router-link to="/configuration">配置</router-link></p>
    <p><router-link to="/1">es6</router-link></p>
    <p><router-link to="/2">工作</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'right-tabs',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding-top: 20px;
  text-align: center;
  p {
    line-height: 50px;
  }
}
</style>
