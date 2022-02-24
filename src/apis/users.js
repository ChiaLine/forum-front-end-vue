import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUse (userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得使用者資訊
  getCurrentUser () {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUsers () {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 加入追蹤
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  // 加入最愛
  addFavorite({ restaurantID }) {
    return apiHelper.post(`/favorite/${restaurantID}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFavorite ({ restaurantID }) {
    return apiHelper.delete(`/favorite/${restaurantID}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 喜歡的餐廳
  addLiked ({ restaurantID }) {
    return apiHelper.post(`/like/${restaurantID}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike ({ restaurantID }) {
    return apiHelper.delete(`/like/${restaurantID}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}
