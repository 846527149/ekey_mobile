import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import demo from '@/view/demo'


Vue.use(Router)

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: 'login'
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: {
        title: 'demo'
      }
    },
    {
      path: '/user',
      name: 'user',
      component:() => import('@/view/user/index'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '*',
      component: login,
      meta: {
        title: '首页'
      }
    }
  ]
})
