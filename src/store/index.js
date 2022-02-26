import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // 專門放資料的
  state: {
    // 設定狀態
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    // 登入狀態
    isAuthenticated: false,
    // 新增 token 屬性
    token: '',
  },
  // 用來修改 state 資料的方法
  mutations: {
    // 有兩個參數原本的,從外面傳進來的 更新 state 裡的資料
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }

      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true

       // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
    },
    // 處理登出功能 透過 commit 呼叫 mutations 方法
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  // 專門 API 的方法 
  actions: {
    // 驗證使用者身份 透過 dispatch() 呼叫 actions 方法 
    async fetchCurrentUser ({commit}) {
      try {
        // 透過 API請求資料
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data

        // 取得 API資料 呼叫 更新 mutations 方法 state 裡的資料
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

        // 使用者Token驗證成功 回傳..
        return true
      } catch (error) {
        console.error(error.message)

        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')

        // 使用者Token驗證失敗 回傳..
        return false
      }
    }
  },
  modules: {
  }
})
