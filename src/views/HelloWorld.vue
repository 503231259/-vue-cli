<template>
  <el-container>
    <el-aside width="200px">
      <rightTabs />
    </el-aside>
    <el-container>
      <el-header>我爱我的祖国</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import rightTabs from '@/components/right-tabs.vue'
export default {
  name: 'HelloWorld',
  components: {rightTabs},
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
