import axios from "axios"
import Swal from 'sweetalert2'


const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL
})

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
