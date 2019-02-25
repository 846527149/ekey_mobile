import request from '@/utils/request'

export function getNewsList(page) {
	return request({
		url: '/news/list',
		method: 'get',
		params: {
      "page":page
		}
	})
}
