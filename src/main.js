// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'//路由
import VueWechatTitle from 'vue-wechat-title'//页面描述
import axios from 'axios'//api求情
import '@/assets/icons' // icon
import 'lib-flexible/flexible.js'//页面自适应
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.use(VueWechatTitle)
import  { ToastPlugin,dateFormat  } from 'vux'
Vue.use(ToastPlugin, {position: 'bottom'})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
