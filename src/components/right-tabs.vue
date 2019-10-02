<template>
  <div class="box">
    <!-- <router-link to="/"><p>配置</p></router-link>
    <router-link to="/es6"><p>es6</p></router-link>
    <router-link to="/work"><p>工作</p></router-link> -->
    <el-col>
      <h5>默认颜色</h5>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               router=true
               >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>配置</span>
          </template>
          <el-menu-item index="configuration">搭建3.0脚手架</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>es6</span>
          </template>
          <el-menu-item index="es6">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4-1">选项4</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
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
}
</style>
