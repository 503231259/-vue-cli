import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import EstablishVueCli from '@/components/configuration/establish-vue-cli.vue'
import knowLedge from '@/components/es6/know-ledge.vue'
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
          path: 'EstablishVueCli',
          component: EstablishVueCli
        }, {
          path: 'knowledge',
          component: knowLedge
        }, {
          path: 'work',
          component: work
        }
      ]
    }
  ]
})
