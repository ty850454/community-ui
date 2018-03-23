import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/HelloFromVux'


import pages_home from '@/pages/home'
import pages_info from '@/pages/info'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: pages_home
    },{
      path: '/info/:id',
      name: 'info',
      component: pages_info
    }
  ]
})
