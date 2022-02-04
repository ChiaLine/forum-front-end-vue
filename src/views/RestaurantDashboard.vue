<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

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
  </div>
</template>

<script>

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Mellie Schuppe",
        "tel": "(915) 611-7223",
        "address": "47090 Julien Stream",
        "opening_hours": "08:00",
        "description": "aliquam dolores qui",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.7742060947922411",
        "viewCounts": 1,
        "createdAt": "2022-01-29T12:03:27.000Z",
        "updatedAt": "2022-02-02T09:36:20.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Voluptas ducimus et.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$G70ZmsHRXYWWd0qjkP441ukpCBAeXAeUwXNlhIOr.oa8BuC8jORLS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-01-29T12:03:27.000Z",
                    "updatedAt": "2022-01-29T12:03:27.000Z"
                }
            },
            {
                "id": 51,
                "text": "Nihil commodi nobis culpa.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$UCwA0gYP2eR.2VTRpaByGeyUlwjshzDh6ekc1oGKHcEjkkc5crh5u",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-01-29T12:03:27.000Z",
                    "updatedAt": "2022-01-29T12:03:27.000Z"
                }
            },
            {
                "id": 101,
                "text": "Dolores a deserunt facilis natus voluptatem minima cum placeat.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$UCwA0gYP2eR.2VTRpaByGeyUlwjshzDh6ekc1oGKHcEjkkc5crh5u",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-01-29T12:03:27.000Z",
                    "updatedAt": "2022-01-29T12:03:27.000Z"
                }
            }
        ]
    }
}

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        viewCounts: 0,
        commentsLength: 0,
      },
      isAdmin: true
    }
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData
      this.restaurant = {
        name: restaurant.name,
        viewCounts: restaurant.viewCounts,
        categoryName: restaurant.Category.name,
        commentsLength: restaurant.Comments.length,
      }
    }
  },
  created() {
    this.fetchRestaurant()
  }
}
</script>
