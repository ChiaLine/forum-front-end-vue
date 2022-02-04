import Vue from 'vue'
import VueRouter from 'vue-router'
// 載入頁面檔案
import NotFound from '../views/NotFound.vue' 
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

// 新增一個路由{}
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  }, 
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    // 動態載入 在需要時才載入頁面
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    // 不管使用者寫什麼，沒配到就選*
    path: '*',
    // 取路由名稱
    name: 'not-found',
    // 放已載入的主件
    component: NotFound
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
