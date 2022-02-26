import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    // 拿餐廳類別資料
    get () {
      return apiHelper.get('/admin/categories')
    },
    create ({nweCategoryName}) {
      return apiHelper.post('/admin/categories', nweCategoryName)
    },
    // 更新
    update ( categoryId, name) {
      return apiHelper.put(`/admin/categories/${categoryId}`, name)
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    }
  },
  restaurants: {
    // 拿餐廳資料
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    // 建立表單後丟給後端
    create ({ formData }) {
      // 因為是 POST 請求，第二個參數可以放 formData
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete(restaurantID) {
      return apiHelper.delete(`/admin/restaurants/${restaurantID}`)
    },
    // 更新餐廳資料
    update ({ restaurantId, formData }) {
      // 因為是 PUT 請求，第二個參數可以放 formData
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId,isAdmin}) {
      return apiHelper.put(`/admin/users/${userId}`, {isAdmin})
    },
  }
}