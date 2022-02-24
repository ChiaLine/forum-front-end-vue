<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <!-- 把資料傳遞給子元件 -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsFeedsAPI from '../apis/restaurantsFeeds'
import { Toast } from '../utils/helpers'

export default {
  components: {
    NavTabs: NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    async fetchFeeds() {
        try {
            const response = await restaurantsFeedsAPI.getFeeds()
            this.restaurants = response.data.restaurants
            // 先過濾 Restaurant內有資料才保留下來
              this.comments = response.data.comments.filter(c => c.Restaurant && c.text)
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: '無法取得最新餐廳評論資料，請稍後再試..'
            })
        }
    }
  },
  created() {
    this.fetchFeeds()
  }
}
</script>