<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-lg-4">
        <img
          class="img-responsive center-block" 
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        >
        <div class="contact-info-wrap">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{restaurant.openingHours}}
            </li>
            <li>
              <strong>Tel:</strong>
              {{restaurant.tel}}
            </li>
            <li>
              <strong>Address:</strong>
              {{restaurant.address}}
            </li>
          </ul>
        </div>
      </div>
        <p>{{ restaurant.description ?  restaurant.description: "未描述"}}</p>
      <hr>

      <ul>
        <li>評論數： {{ restaurant.commentsLength }} </li>
        <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
      </ul>

      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
    </template>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from './../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        viewCounts: 0,
        commentsLength: 0,
      },
      isAdmin: true,
      isLoading: true
    }
  },
  mixins: [ emptyImageFilter ],
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        console.log(data)

        const { restaurant } = data
        this.restaurant = {
          ...restaurant,
        name: restaurant.name,
        viewCounts: restaurant.viewCounts,
        categoryName: restaurant.Category.name,
        commentsLength: restaurant.Comments.length,
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試..",
        });
      }      
    }
  },
  created() {
    const { id } = this.$route.params;
    console.log(id)
    this.fetchRestaurant(id)
  }
}
</script>
