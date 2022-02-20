import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTopUsers () {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 追蹤
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
