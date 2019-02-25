import {
  login,
  logout
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_CODE: (state, code) => {
      state.code = code
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      const username = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.passWord).then(response => {
          const data = response
          setToken(data.CustomerCode)
          console.log(data.CustomerName);
          commit('SET_TOKEN', data.CustomerCode)
					commit('SET_NAME', data.CustomerName)
          commit('SET_AVATAR', data.PhotoPath)
					commit('SET_CODE', data.CustomerCode)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },


    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_Code', '')
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
