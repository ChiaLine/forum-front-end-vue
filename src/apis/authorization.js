// 把剛設定好的 apiHelper 拿進來，變數裡放的是 axios 設定
import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp ({ name, email, password, passwordCheck }) {
    return apiHelper.post('/signup', {
      name,
      email,
      password,
      passwordCheck,
    })
  }
}