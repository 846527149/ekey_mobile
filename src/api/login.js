import request from '@/utils/request'

export function login(username, password) {
	return request({
		url: '/customer/login',
		method: 'get',
		params: {
      "userName":username,
			"passWord":password,
		}
	})
}
export function logout() {
	return request({
		url: '/user/logout',
		method: 'post'
	})
}
