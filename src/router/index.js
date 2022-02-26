import Vue from 'vue'
import VueRouter from 'vue-router'
// 載入頁面檔案
import NotFound from '../views/NotFound.vue' 
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

// 載入 state
import store from './../store'

Vue.use(VueRouter)

// 沒有權限的使用者來說，即使他知道網址、也應該被轉址到 404 頁面
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  // 若帳號沒有 isAdmin 的權限
  if (currentUser && !currentUser.isAdmin) {
    next('/notfound')
    return
  }

  next()
}

// 新增一個路由{}
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
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
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
    // 沒有權限的使用者來說，即使他知道網址、也應該被轉址到 404 頁面
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurants-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurants-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
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

// Vue Router 監聽切換頁面事件 提供了 beforeEach 方法
router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem('token')

  // 從 state 取出 token
  const tokenInStore = store.state.token

  // 預設是尚未驗證
  let isAuthenticated = store.state.isAuthenticated

  // 如果有 token 的話才驗證 & 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 使用 dispatch 呼叫 Vuex 的 actions方法 向後端取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁 & 避免出現無窮迴圈
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁 & 避免出現無窮迴圈
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }

  next()
})

export default router
