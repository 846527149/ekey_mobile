import axios from 'axios'
import store from '../store'
import Vue from 'vue'
import {
  getToken
} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    if (response.status == 200) {
      const res = response.data
      if (!res.IsSuccess) {
        return Promise.reject(res.Message);
      } else {
        return res.Data
      }
    } else {
      return Promise.reject('错误代码：' + response.status);
    }

  },
  error => {
    return Promise.reject(error)
  }
)

export default service
