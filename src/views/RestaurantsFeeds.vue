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
            }
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
            }
        },
        {
            "id": 3,
            "name": "Alayna Morissette",
            "tel": "(526) 235-9565 x57861",
            "address": "391 Bradtke Well",
            "opening_hours": "08:00",
            "description": "Saepe eum magnam debitis quo.\nReprehenderit qui quisquam sapiente exercitationem suscipit omnis.\nCum voluptas vitae non omnis.\nEum quo praesentium cum qui ut nam maiores qui enim.",
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
            }
        },
        {
            "id": 4,
            "name": "Filomena Gleichner",
            "tel": "010-226-3876",
            "address": "020 Pouros Station",
            "opening_hours": "08:00",
            "description": "Maiores debitis explicabo laboriosam hic. Qui eos laudantium voluptas hic vitae commodi deleniti. Occaecati praesentium et consequatur assumenda. Earum enim ea non. Est cumque et facilis eos enim quis. Vel asperiores natus exercitationem numquam beatae occaecati.",
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
            }
        },
        {
            "id": 5,
            "name": "Alexa Stanton",
            "tel": "(218) 189-3000 x987",
            "address": "047 Monahan Walks",
            "opening_hours": "08:00",
            "description": "Saepe corrupti animi reiciendis earum impedit vel est. Iure earum pariatur aut aut ea. Aspernatur quia rerum impedit facere eaque odit. Qui quae quae id ipsa. Magni doloremque dignissimos ullam doloremque eum.\n \rSimilique harum at maxime vel inventore. Minus consequuntur temporibus ad ipsum magni et sit inventore eum. Qui molestias voluptas cumque assumenda eius. Quasi quis illo eius provident magnam dolore quidem quas ipsam. Impedit iste soluta eligendi culpa labore pariatur non. Recusandae mollitia omnis magnam et similique et odit quia.\n \rFugiat nulla ratione illum fugit et eos ut. Est consequuntur in sit harum nulla praesentium ab aperiam. Iure architecto voluptate. Sint minus commodi ab voluptatum animi cumque quasi tempore. Quia voluptas provident sit dolorem recusandae velit omnis. Soluta animi sit voluptas dolores.",
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
            }
        },
        {
            "id": 6,
            "name": "Alex Leannon",
            "tel": "1-504-780-3499",
            "address": "154 Hickle Prairie",
            "opening_hours": "08:00",
            "description": "Omnis neque consequatur ut voluptas rerum in. Quod et cupiditate rerum consequatur nesciunt enim autem deleniti vel. Autem odio culpa dolorem sit sapiente. Voluptas distinctio ratione non suscipit.",
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
            }
        },
        {
            "id": 7,
            "name": "Sabrina Stokes",
            "tel": "(625) 196-6768",
            "address": "30345 Kutch Ford",
            "opening_hours": "08:00",
            "description": "Omnis delectus accusantium quis consequatur voluptatum sit consequatur nihil molestiae.",
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
            }
        },
        {
            "id": 8,
            "name": "Godfrey McKenzie",
            "tel": "(296) 977-8524",
            "address": "1937 Jacobson Grove",
            "opening_hours": "08:00",
            "description": "Voluptas fugit facere. Libero voluptatum deleniti repellat. Autem aut ut. Quaerat nihil totam eos.",
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
            }
        },
        {
            "id": 9,
            "name": "Cale Crooks",
            "tel": "205-100-0244 x01300",
            "address": "0347 Koch Skyway",
            "opening_hours": "08:00",
            "description": "Et dicta quod sit voluptatem beatae corporis neque. Ut autem animi ut tempore rerum voluptatem reprehenderit et. Quam est recusandae iusto.\n \rUnde laudantium impedit consequatur et nisi optio porro et. Ducimus velit repudiandae accusamus voluptas quos consectetur nobis ut et. Impedit et modi.\n \rVoluptas non porro iste quidem dolorum dolor consequatur quis. Eum aut molestias a sed vitae nam nam esse. Ipsam ut quos velit sint ipsa.",
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
            }
        },
        {
            "id": 10,
            "name": "Lera Corwin",
            "tel": "1-576-193-1492",
            "address": "219 Korey Motorway",
            "opening_hours": "08:00",
            "description": "Et molestias possimus asperiores voluptatem praesentium cumque fuga.\nEum numquam maiores.\nDistinctio ipsam earum temporibus consequatur quisquam alias nam.\nEa porro et aliquid in.\nAlias est voluptates assumenda.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 12,
            "text": "Et et atque.",
            "UserId": 1,
            "RestaurantId": 12,
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
            },
            "Restaurant": {
                "id": 12,
                "name": "Orval Boyle",
                "tel": "1-418-702-0431",
                "address": "24718 Amy Brooks",
                "opening_hours": "08:00",
                "description": "autem",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.34904539197935",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 31,
            "text": "Nemo doloremque blanditiis tempore est delectus provident.",
            "UserId": 1,
            "RestaurantId": 31,
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
            },
            "Restaurant": {
                "id": 31,
                "name": "Aracely Flatley",
                "tel": "160-042-0309",
                "address": "08279 Barrows Crossing",
                "opening_hours": "08:00",
                "description": "Eaque tenetur doloremque dolores accusamus voluptatem voluptate voluptates.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.339568073195363",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 63,
            "text": "Ab odio ullam culpa maiores iste.",
            "UserId": 1,
            "RestaurantId": 13,
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
            },
            "Restaurant": {
                "id": 13,
                "name": "Mylene Grant",
                "tel": "492-354-7142",
                "address": "570 Gleason Skyway",
                "opening_hours": "08:00",
                "description": "Laudantium nisi aliquam ipsam natus ipsam pariatur. Odio asperiores cum quisquam non. Et vero cum esse sint nihil tempore. Molestiae voluptatem dolores laudantium eum cupiditate eligendi. Ut quia ut dolores vel ut qui corrupti consectetur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.51106671355463",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 86,
            "text": "Voluptatum cumque rem illum voluptas qui laudantium.",
            "UserId": 1,
            "RestaurantId": 36,
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
            },
            "Restaurant": {
                "id": 36,
                "name": "Mireya Ullrich",
                "tel": "(958) 101-7773 x106",
                "address": "644 Hyman Row",
                "opening_hours": "08:00",
                "description": "Rerum ad voluptates unde laboriosam repudiandae soluta rerum quam vel.\nRerum doloribus sunt aut doloremque sint assumenda.\nQui rem aut dolorem rerum fugit sunt ipsam et.\nCorrupti minus voluptatem expedita in voluptas totam odio.\nBeatae ratione illum dolorem ut aliquam voluptas excepturi.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.042920711411526",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 102,
            "text": "Commodi tempora excepturi ut itaque.",
            "UserId": 1,
            "RestaurantId": 2,
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
            },
            "Restaurant": {
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
                "CategoryId": 3
            }
        },
        {
            "id": 5,
            "text": "Quos officia culpa ex.",
            "UserId": 2,
            "RestaurantId": 5,
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
            },
            "Restaurant": {
                "id": 5,
                "name": "Alexa Stanton",
                "tel": "(218) 189-3000 x987",
                "address": "047 Monahan Walks",
                "opening_hours": "08:00",
                "description": "Saepe corrupti animi reiciendis earum impedit vel est. Iure earum pariatur aut aut ea. Aspernatur quia rerum impedit facere eaque odit. Qui quae quae id ipsa. Magni doloremque dignissimos ullam doloremque eum.\n \rSimilique harum at maxime vel inventore. Minus consequuntur temporibus ad ipsum magni et sit inventore eum. Qui molestias voluptas cumque assumenda eius. Quasi quis illo eius provident magnam dolore quidem quas ipsam. Impedit iste soluta eligendi culpa labore pariatur non. Recusandae mollitia omnis magnam et similique et odit quia.\n \rFugiat nulla ratione illum fugit et eos ut. Est consequuntur in sit harum nulla praesentium ab aperiam. Iure architecto voluptate. Sint minus commodi ab voluptatum animi cumque quasi tempore. Quia voluptas provident sit dolorem recusandae velit omnis. Soluta animi sit voluptas dolores.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.17979367321756",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 23,
            "text": "Magnam vel occaecati rerum ut architecto non sed.",
            "UserId": 2,
            "RestaurantId": 23,
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
            },
            "Restaurant": {
                "id": 23,
                "name": "Carmela Rau",
                "tel": "(425) 661-0178",
                "address": "69071 Charity Bypass",
                "opening_hours": "08:00",
                "description": "In in voluptate est mollitia est. Et molestias qui quidem. Excepturi dolores enim dolorum quidem temporibus sequi dolorem sunt eum. Autem molestias qui unde voluptas vero odit. Atque aut sequi labore unde necessitatibus tenetur illo porro itaque.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.517086570533337",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 4
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
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 70,
            "text": "Rerum architecto qui qui ipsum quas itaque quaerat id eveniet.",
            "UserId": 2,
            "RestaurantId": 20,
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
            },
            "Restaurant": {
                "id": 20,
                "name": "Annabelle Langworth",
                "tel": "294.400.9735 x650",
                "address": "72590 Marcia Springs",
                "opening_hours": "08:00",
                "description": "Facere delectus corporis natus consequuntur alias. Corrupti nulla tempore sint placeat aut sit quis. Quasi earum similique voluptatum consequatur aliquid et est. Autem qui excepturi enim pariatur maiores. Delectus sit dolor qui aut ut quo odio vitae aliquam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.7721344874989",
                "viewCounts": 0,
                "createdAt": "2022-01-29T12:03:27.000Z",
                "updatedAt": "2022-01-29T12:03:27.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 96,
            "text": "Quasi porro et in voluptas.",
            "UserId": 2,
            "RestaurantId": 46,
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
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        }
    ]
}

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
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      // 先過濾 Restaurant內有資料才保留下來
      this.comments = dummyData.comments.filter(c => c.Restaurant && c.text)
    }
  },
  created() {
    this.fetchFeeds()
  }
}
</script>