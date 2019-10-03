<template>
  <div>
    <p>1 打开cmd</p>
    <p>2 下载安装node, 在cmd里查看版本, 输入命令node -v / npm -v</p>
    <p>3 安装webpack:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;cmd中输入命令行: npm install webpack -g, npm install webpack-cli -g<br>
      &nbsp;&nbsp;&nbsp;&nbsp;查看版本: cmd里输入命令: webpack -V (V 是大写的)</p>
    <p>4 下载vue-cli <br>
      &nbsp;&nbsp;&nbsp;&nbsp;cmd里输入: npm install -g @vue/cli 3.0以上版本<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm install vue-cli -g 2.9.6版本<br>
      &nbsp;&nbsp;&nbsp;&nbsp;注: 如果之前安装过2.0版本, 需要先卸载, 再安装3.0版本<br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;卸载2.9.6版本安装3.0版本时, cmd报错:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;C:\Users\lenovo>npm install -g @vue/cli<br>
      &nbsp;&nbsp;&nbsp;&nbsp;npm ERR! Unexpected end of JSON input while parsing near '..."engines": {"node":">='<br>
      &nbsp;&nbsp;&nbsp;&nbsp;npm ERR! A complete log of this run can be found in:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;npm ERR! C:\Users\lenovo\AppData\Roaming\npm-cache\_logs\2019- 09-27T07_18_16_594Z-debug.log<br>
      &nbsp;&nbsp;&nbsp;&nbsp;解决: npm cache clean --force 类似于清缓存 npm install 报错，不妨试试这个命令</p>
    <p>5 安装脚手架: vue init webpack 项目名字(项目名字不能用中文)</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'establishVueCli',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
p {
  line-height: 25px;
}
</style>
