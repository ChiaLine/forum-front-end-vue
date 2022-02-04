<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{
                name: 'dashboard',
                params: {
                  id: restaurant.id
                }
              }"
              class="btn btn-primary mr-2"
            >Show</router-link>

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
import NavTabs from '../components/NavTabs.vue'

const dummyDaya = {
    "restaurants": [
        {
            "id": 50,
            "name": "Edwin Wyman",
            "tel": "(143) 642-8686",
            "address": "47861 Abdul Route",
            "opening_hours": "08:00",
            "description": "Ipsum deserunt temporibus sint voluptas ullam vel.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.33909761494844",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Warren Rogahn",
            "tel": "1-196-581-8814 x332",
            "address": "2318 Savanna Islands",
            "opening_hours": "08:00",
            "description": "Autem tenetur qui iste laudantium cupiditate qui d",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.33661090344481",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Izaiah Reynolds",
            "tel": "(205) 552-0536",
            "address": "865 Ivy Summit",
            "opening_hours": "08:00",
            "description": "consequatur voluptatibus harum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.3488751512975",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Madeline Flatley",
            "tel": "1-519-967-0757",
            "address": "31636 Shyanne Pine",
            "opening_hours": "08:00",
            "description": "Repellendus sit laudantium tempore necessitatibus ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.22187002581906",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Mr. Torey Heathcote",
            "tel": "1-917-326-1291",
            "address": "580 O'Hara Course",
            "opening_hours": "08:00",
            "description": "Debitis voluptas aut et temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.82892476204207",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Astrid Lesch",
            "tel": "859-192-9035",
            "address": "429 Hettinger Trail",
            "opening_hours": "08:00",
            "description": "odit qui exercitationem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.81087114243682",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Anabelle Jacobson",
            "tel": "809.993.8285 x109",
            "address": "55709 Gust Pike",
            "opening_hours": "08:00",
            "description": "deserunt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.160444757769518",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Dariana Kohler",
            "tel": "(580) 582-6710 x747",
            "address": "926 Hickle Grove",
            "opening_hours": "08:00",
            "description": "Cumque velit nesciunt quas iure itaque rerum numqu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.00599586928362",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Rhoda Gulgowski",
            "tel": "1-259-641-6649 x470",
            "address": "915 Marcos Heights",
            "opening_hours": "08:00",
            "description": "consequatur porro rem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.455827340545135",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Arlene Lynch",
            "tel": "(536) 999-3995 x37506",
            "address": "14013 Kendra Hill",
            "opening_hours": "08:00",
            "description": "dolores doloribus aut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.816394242536312",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs: NavTabs,
  },
  data() {
    return {
      restaurants: dummyDaya.restaurants
    }
  },
  methods: {
    addFavorited(id) {
      const index = this.restaurants.findIndex(res => res.id === id)
      this.restaurants[index].isFavorited = true
    },
    deleteFavorited(id) {
      const index = this.restaurants.findIndex(res => res.id === id)
      this.restaurants[index].isFavorited = false
    }
  }
}
</script>