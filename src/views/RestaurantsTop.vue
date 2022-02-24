<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description ?  restaurant.description: "未描述"}}
            </p>
            <router-link
              :to="{
                name: 'dashboard',
                params: {
                  id: restaurant.id,
                },
              }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorited(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorited(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from "../utils/mixins";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from '../utils/helpers'
import usersAPI from './../apis/users'

export default {
  components: {
    NavTabs: NavTabs,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const  { data }  = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試..'
        })
      }
    },
    async addFavorited(restaurantID) {
      try {
        const  { data }  = await usersAPI.addFavorite({ restaurantID })
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantID) {
            return restaurant
          } else {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試..'
        })
      }
    },
    async deleteFavorited(restaurantID) {
      try {
        const  { data }  = await usersAPI.deleteFavorite({ restaurantID })
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantID) {
            return restaurant
          } else {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false
            }
          }
        })

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試..'
        })
      }
    },
  },
};
</script>
