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
    isAuthenticated: false
  },
  // 用來修改 state 資料的方法
  // 透過 commit 發動 mutations 方法
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
    }
  },
  // 透過 dispatch() 可以呼叫 actions 屬性內的方法 
  actions: {
    // 透過API請求資料
    async fetchCurrentUser ({commit}) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來        
        const { data } = await usersAPI.getCurrentUser()
        // console.log('data', data)
        const { id, name, email, image, isAdmin } = data
        // 取得 API資料 呼叫 更新 mutations 方法 state 裡的資料
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
