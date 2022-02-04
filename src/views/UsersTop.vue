<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{
          name: 'user',
          params: {
            id: user.id
          }
        }">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link >
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowed(user)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowed(user)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$G70ZmsHRXYWWd0qjkP441ukpCBAeXAeUwXNlhIOr.oa8BuC8jORLS",
            "isAdmin": true,
            "image": 'https://i.imgur.com/FveUJHK.png',
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$UCwA0gYP2eR.2VTRpaByGeyUlwjshzDh6ekc1oGKHcEjkkc5crh5u",
            "isAdmin": false,
            "image": 'https://i.imgur.com/Lp0dzmV.png',
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$uPopN.W5QzSZMnRTmEm.De.ZPV7YKuExI0iJqub425gZYPVwEc1P6",
            "isAdmin": false,
            "image": 'https://i.imgur.com/v7AjrOw.png',
            "createdAt": "2022-01-29T12:03:27.000Z",
            "updatedAt": "2022-01-29T12:03:27.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
    ]
}

export default {
  components: {
    NavTabs: NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      // this.users = dummyData.users
      // 上下結果一樣，只是方法不同
      const { users } = dummyData
      this.users = users
    },
    addFollowed(user) {
      user.isFollowed = true
    },
    deleteFollowed(user) {
      user.isFollowed = false
    },
  },
  created() {
    this.fetchUsers()
  }
}
</script>