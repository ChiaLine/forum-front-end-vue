// 把設定好的 apiHelper 拿進來，變數裡放的是 axios 設定
import { apiHelper } from './../utils/helpers'

// 從 LocalStorage 取出 token，放進 Header
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 新增評論
  addComment(payload) {
    return apiHelper.post(`/comments`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  // 刪除評論
  deleteComment ( id ) {
    return apiHelper.delete(`/comments/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 攜帶 page 和 categoryId 參數
  getRestaurants ({ page, categoryId }) {
    // 建立處理 page 和 categoryId 參數的方法
    const searchParams = new URLSearchParams({ page, categoryId })
    // 透過 apiHelper 發出 GET 請求給 /restaurants 帶入處理參數&呼叫token方法
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}