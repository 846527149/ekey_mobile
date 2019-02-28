import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import demo from '@/view/demo'
import index from '@/view/index'



Vue.use(Router)

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: 'index'
      }
    },
    {
      path: '/login',
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
      path: '/news',
      name: 'news',
      component:() => import('@/view/news/index'),
      meta: {
        title: '新闻资讯'
      }
    },
    {
      path: '*',
      component: index,
      meta: {
        title: '首页'
      }
    }
  ]
})
