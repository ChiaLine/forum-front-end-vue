import { apiHelper } from './../utils/helpers'

export default {
  getUse (userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  // 取得使用者資訊
  getCurrentUser () {
    return apiHelper.get(`/get_current_user`)
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  // 加入追蹤
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  // 加入最愛
  addFavorite({ restaurantID }) {
    return apiHelper.post(`/favorite/${restaurantID}`, null)
  },
  deleteFavorite ({ restaurantID }) {
    return apiHelper.delete(`/favorite/${restaurantID}`)
  },
  // 喜歡的餐廳
  addLiked ({ restaurantID }) {
    return apiHelper.post(`/like/${restaurantID}`, null)
  },
  deleteLike ({ restaurantID }) {
    return apiHelper.delete(`/like/${restaurantID}`)
  },
}
