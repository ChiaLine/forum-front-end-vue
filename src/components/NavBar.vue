<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          to="/admin/restaurants"
          class="text-white mr-3"
          v-if="currentUser.isAdmin"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
            :to="{
              name: 'user',
              params: {
                id: currentUser.id,
              },
            }"
            class="text-white mr-3"
          >
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
  // Step1：移除 dummyUser 引入 vuex
import { mapState } from 'vuex'

export default {
  // Step2：移除 data 屬性
  // Step3：移除 created 和 fetchUser 的方法
  // Step4：新增 `mapState` 方法 取得 vuex 資料
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
}

</script>
