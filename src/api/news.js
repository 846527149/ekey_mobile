import request from '@/utils/request'
/**
 * @description 根据标签获取资讯列表
 * @author yongwei.hou
 * @date 2019-02-26
 * @export
 * @param {*} pageIndex 当前页
 * @param {*} pageSize  行数
 * @param {*} tagCode   标签编码
 * @returns
 */
export function getNewsList(pageEntity) {
  return request({
    url: '/common/v1.0/Article/GetArticleByTag',
    method: 'get',
    params: {
      "pageIndex": pageEntity.pageIndex,
      "pageSize": pageEntity.pageSize,
      "tagCode": pageEntity.tagCode
    },
  })
}
/**
 * @description 获取新闻标签
 * @author yongwei.hou
 * @date 2019-02-26
 * @export
 * @returns
 */
export function getNewsTag() {
  return request({
    url: '/common/v1.0/Article/GetAllTags',
    method: 'get'
  })
}
