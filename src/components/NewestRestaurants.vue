<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link :to="{
            name: 'restaurant',
            params: {
              id: restaurant.id
            }
          }">
            {{ restaurant.name }}
          </router-link>
          <small>{{ restaurant.Category ? restaurant.Category.name :'未定義' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        <!-- 套用 filters 格式化資料-->
        {{ restaurant.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'

export default {
  mixins: [ fromNowFilter ],
  // 建立props屬性 
  props: {
    // 取得父元件 傳遞的屬性資料
    restaurants: {
      // 驗證 資料類型
      type: Array,
      // 是必要的資料 一定要傳入 
      required: true,
    }
  },
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>