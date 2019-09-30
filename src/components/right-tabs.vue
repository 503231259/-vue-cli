<template>
  <div class="box">
    <router-link to="/configuration"><p>配置</p></router-link>
    <router-link to="/es6"><p>es6</p></router-link>
    <router-link to="/work"><p>工作</p></router-link>
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
