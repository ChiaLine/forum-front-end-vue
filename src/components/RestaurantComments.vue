<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div>
      <blockquote class="blockquote mb-0" v-for="comment in restaurantComments" :key="comment.id">
        <button
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{
            name: 'user',
            params: {
              id: comment.User.id
            }
          }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "isAdmin": true
  },
  isAuthenticated: true
}

export default {
  props: {
    restaurantComments: {
      type: Array,
      require: true
    }
  },
  mixins: [ fromNowFilter ],
  data() {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    handleDeleteButtonClick(commentID) {
      // 發送 API 請求後端刪除資料
      // 建立事件傳遞父元件
      this.$emit('after-delete-comment', commentID)
    }
  }
}
</script>