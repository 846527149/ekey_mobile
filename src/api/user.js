import request from '@/utils/request'
/**
 * 获取客户详细资料
 *
 * @export
 * @param {*} username
 * @param {*} password
 * @returns
 */
export function getCustomerDetail(customerCode) {
	return request({
		url: '/customer/GetCustomerDetail',
		method: 'get',
		params: {
      "customerCode":customerCode
		}
	})
}
