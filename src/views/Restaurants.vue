<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />

    <div v-if="restaurants.length < 1">
        此類別目前無餐廳資料
    </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantPagination from "../components/RestaurantPagination.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from './../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    NavTabs: NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      // 現在只想看到哪個餐廳
      categoryId: -1,
      // 現在在第幾頁
      currentPage: 1,
      // 總共有幾頁
      totalPage: [],
      // 前一頁
      previousPage: -1,
      // 下一頁
      nextPage: -1,
      isLoading: true
    };
  },
  methods: {
    // STEP 1：將 dummyData 刪除，取得 API 資料
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        //   STEP 2：透過解構賦值，將所需要的資料從 response.data 取出
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;
        // STEP 3：將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試..'
        })
      }
    },
  },
  created() {
    const { page = '', categoryId = '' } =  this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next){
    // 取得query資料
    const { page = '', categoryId = '' } =  to.query
    // 呼叫API方法把取得資料用參數方式帶入
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
};
</script>
