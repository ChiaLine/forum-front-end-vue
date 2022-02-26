import axios from "axios"
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL
})

// 在每一個發出去的 request 前和 response 後的時間點去做一些處理
// 透過 interceptors 的使用，讓使用者（有 token）的情況下...
axiosInstance.interceptors.request.use(
  config => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      // 把所有發出去的請求都添加上 Authorization 的標頭
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  // 要使用的方法
  toast: true,
	// 顯示位置： 右上角
  position: 'top-end',
	// 是否顯示確認按鈕
  showConfirmButton: false,
	// 停留多久： 3秒
  timer: 3000
})
