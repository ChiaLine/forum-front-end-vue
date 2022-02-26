import { apiHelper } from './../utils/helpers'

export default {
  // 攜帶 page 和 categoryId 參數
  getFeeds () {
    return apiHelper.get(`/restaurants/feeds`)
  }
}