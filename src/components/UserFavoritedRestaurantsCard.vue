<template>
  <div class="card">
    <div class="card-header"><strong>{{ FavoritedRestaurants.length }}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <a href="/restaurants/2" v-for="FavoritedRestaurant in FavoritedRestaurants" :key="FavoritedRestaurant.id">
        <img
          :src="FavoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FavoritedRestaurants: {
      type: Array,
      require: true
    },
  }
}
</script>
