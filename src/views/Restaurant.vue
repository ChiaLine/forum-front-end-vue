<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail 
    :initial-restaurant="restaurant"
    :restaurantComments="restaurantComments"
    />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurantComments="restaurantComments"
    @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'

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
        "updatedAt": "2022-02-02T09:36:20.155Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
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
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser = {
    currentUser: {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "image": null,
        "isAdmin": true
    },
    isAuthenticated: true
}

export default {
    name: 'restaurant',
    components: {
        RestaurantDetail,
        RestaurantComments,
        CreateComment,
    },
    data() {
        return {
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                image: '',
                openingHours: '',
                tel: '',
                address: '',
                description: '',
                isFavorited: false,
                isLiked: false
            },
            restaurantComments: [],
            currentUser: dummyUser.currentUser
        }
    },
    methods: {
        fetchRestaurant(restaidurantId) {
            console.log('restaidurantId',restaidurantId)
            const { restaurant, isFavorited, isLiked } = dummyData
            const { 
                id,  
                name,
                Category,
                image,
                opening_hours,
                tel,
                address,
                description,
                Comments
            } = restaurant
            this.restaurant = {
                id,
                name,
                categoryName: Category.name,
                image,
                openingHours: opening_hours,
                tel,
                address,
                description,
                isFavorited,
                isLiked,
            }
            this.restaurantComments = Comments
        },
        afterDeleteComment(commentId) {
            // 刪除id相同的資料
            this.restaurantComments = this.restaurantComments.filter( comment => comment.id !== commentId)
        },
        afterCreateComment(payload) {
            // 結構賦值 拆 { } 把資料拿出來
            const { commentId, restaurantId, text } = payload
            // 把資料存入 data 新增評論後 畫面自動更新
            this.restaurantComments.push({
                "id": commentId,
                "RestaurantId": restaurantId,
                "User": {
                    "id": this.currentUser.id,
                    "name": this.currentUser.name,
                },
                "text": text,
                "createdAt": new Date(),
            })
        }
    },
    created() {
        const { id } = this.$route.params
        this.fetchRestaurant(id)
    },
}
</script>