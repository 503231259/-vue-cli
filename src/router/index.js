import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import configuration from '@/components/configuration'
import es6 from '@/components/es6'
import work from '@/components/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'configuration',
          component: configuration
        }, {
          path: 'es6',
          component: es6
        }, {
          path: 'work',
          component: work
        }
      ]
    }
  ]
})
