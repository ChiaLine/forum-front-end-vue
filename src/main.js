// 整個專案JavaScript 的進入點
// Vue.js 本身
import Vue from 'vue'
// 專案的根元件，專案本身
import App from './App.vue'
import router from './router'
import store from './store'
// 載入 全域樣式 css 檔
import './assets/application.css'

Vue.config.productionTip = false

// .$mount('#app') 這個動作
// 把 Vue 有關的內容放進 public/index.html 裡的 <div id="app">
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
