import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    // 拿餐廳類別資料
    get () {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create ({nweCategoryName}) {
      return apiHelper.post('/admin/categories', nweCategoryName, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 更新
    update ( categoryId, name) {
      return apiHelper.put(`/admin/categories/${categoryId}`, name, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  restaurants: {
    // 拿餐廳資料
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 建立表單後丟給後端
    create ({ formData }) {
      // 因為是 POST 請求，第二個參數可以放 formData
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    get() {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete(restaurantID) {
      return apiHelper.delete(`/admin/restaurants/${restaurantID}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 更新餐廳資料
    update ({ restaurantId, formData }) {
      // 因為是 PUT 請求，第二個參數可以放 formData
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ userId,isAdmin}) {
      return apiHelper.put(`/admin/users/${userId}`, {isAdmin}, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  }
}