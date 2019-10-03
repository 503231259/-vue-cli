<template>
  <div class="box">
    <!-- <router-link to="/"><p>配置</p></router-link>
    <router-link to="/es6"><p>es6</p></router-link>
    <router-link to="/work"><p>工作</p></router-link> -->
    <el-col>
      <h1>默认颜色</h1>
      <el-menu class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               router >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>配置</span>
          </template>
          <el-menu-item index="EstablishVueCli">搭建脚手架</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>es6</span>
          </template>
          <el-menu-item index="knowledge">小知识点</el-menu-item>
          <el-menu-item index="1-2">promise</el-menu-item>
          <el-menu-item index="1-3">generator</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>git</span>
          </template>
          <el-menu-item index="es6">基本使用流程</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">工具</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'right-tabs',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {}
  }
}
</script>

<style lang="scss" scoped>
.box {
}
</style>
