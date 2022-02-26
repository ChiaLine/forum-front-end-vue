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
import { mapState } from 'vuex'

export default {
  props: {
    initialRestaurantComments: {
      type: Array,
      require: true
    }
  },
  mixins: [ fromNowFilter ],
  data() {
    return {
      restaurantComments: this.initialRestaurantComments
    }
  },
  computed: {
    // 取得 user 登入資料 自動在data內產生currentUsery 資料
    ...mapState(['currentUser'])
  },
  watch: {
    // 監聽資料更新時，請重新賦值
    initialRestaurantComments(newValue) {
      this.restaurantComments = newValue
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

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>