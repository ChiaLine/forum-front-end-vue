<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
      v-for="restaurant in restaurants" 
      :key="restaurant.id"
      :initial-restaurant="restaurant"/>
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantPagination from '../components/RestaurantPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Mellie Schuppe",
            "tel": "(915) 611-7223",
            "address": "47090 Julien Stream",
            "opening_hours": "08:00",
            "description": "aliquam dolores qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.7742060947922411",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Meta Howe",
            "tel": "402.522.3339 x939",
            "address": "694 Breitenberg Neck",
            "opening_hours": "08:00",
            "description": "beatae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.6238788574246996",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Alayna Morissette",
            "tel": "(526) 235-9565 x57861",
            "address": "391 Bradtke Well",
            "opening_hours": "08:00",
            "description": "Saepe eum magnam debitis quo.\nReprehenderit qui qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.49669715616302",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Filomena Gleichner",
            "tel": "010-226-3876",
            "address": "020 Pouros Station",
            "opening_hours": "08:00",
            "description": "Maiores debitis explicabo laboriosam hic. Qui eos ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.2847401983855",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Alexa Stanton",
            "tel": "(218) 189-3000 x987",
            "address": "047 Monahan Walks",
            "opening_hours": "08:00",
            "description": "Saepe corrupti animi reiciendis earum impedit vel ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.17979367321756",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Alex Leannon",
            "tel": "1-504-780-3499",
            "address": "154 Hickle Prairie",
            "opening_hours": "08:00",
            "description": "Omnis neque consequatur ut voluptas rerum in. Quod",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.47304486651325",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Sabrina Stokes",
            "tel": "(625) 196-6768",
            "address": "30345 Kutch Ford",
            "opening_hours": "08:00",
            "description": "Omnis delectus accusantium quis consequatur volupt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.27777816472697",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Godfrey McKenzie",
            "tel": "(296) 977-8524",
            "address": "1937 Jacobson Grove",
            "opening_hours": "08:00",
            "description": "Voluptas fugit facere. Libero voluptatum deleniti ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.109077346270738",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Cale Crooks",
            "tel": "205-100-0244 x01300",
            "address": "0347 Koch Skyway",
            "opening_hours": "08:00",
            "description": "Et dicta quod sit voluptatem beatae corporis neque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.29863526246582",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Lera Corwin",
            "tel": "1-576-193-1492",
            "address": "219 Korey Motorway",
            "opening_hours": "08:00",
            "description": "Et molestias possimus asperiores voluptatem praese",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.56156701075452",
            "viewCounts": 0,
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs: NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
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
    }
  },
  methods: {
    fetchRestaurants() {
      // 使用結構賦值的方式資料先拿出來
      const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
      // 資料放進data
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>