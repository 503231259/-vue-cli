<template>
  <div>
    <dl>
      <dt>let 命令</dt>
      <dd>只在所在的代码块内有效</dd>
      <dd>外层作用域不受内侧作用域代码的影响</dd>
      <dd>es6规定函数本身的作用域, 在其所在的会计作用域之内</dd>
      <dt>const命令</dt>
      <dd>用来声明常亮, 一旦声明就不能改变</dd>
      <dt>数组的解构赋值</dt>
      <dd>var [a, b, c] = [1, 2, 3]</dd>
      <dd>var [foo, [[bar], baz]] = [1, [[2], 3]]</dd>
      <dd>var [head, ...tail] = [1, 2, 3, 4]</dd>
      <dd>var [ , , third] = ['foo', 'bar', 'baz']</dd>
      <dd>结构不成功, 变量的值是undefined</dd>
      <dd>其他原始类的值都可以转换成对象, undefined和null不能转化成对象, 会报错 / let、const也适用</dd>
      <dt>对象的解构赋值</dt>
      <dd>数组和对象不同, 数组的元素是有序排列的, 变量的取值是由位置决定的,对象的属性是无序的, 变量必须与属性同名</dd>
      <dd>名字不是同名的, 取出的值是undefined</dd>
      <dd>var {x = 3} = {}; - - - - // x=3 对象解构可以指定默认值</dd>
      <dd>var x; {x} = {x: 1};- - - - // 这是错误写法</dd>
      <dd>js会将{x}理解成代码块, 只有不见大括号写在行首, 避免js将其解释成代码块<br>({x}) = {x: 1} 或 ({x}
       = {x: 1})</dd>
      <dd></dd>
      <dd></dd>
      <dd></dd>
      <dd></dd>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'knowLedge',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
dt {
  line-height: 50px;
}
dd {
  line-height: 25px;
}
</style>
