<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{
            name: 'restaurant',
            params: {
              id: restaurant.id
            }
          }">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description ?  restaurant.description : "未描述"}}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorited(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          :disabled="isProcessing"
        >
          移除最愛
        </button>
        <button
          v-else
          @click.stop.prevent="addFavorited(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          :disabled="isProcessing"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteIsLiked(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
          :disabled="isProcessing"
        >
          Unlike
        </button>
        <button
          v-else
          @click.stop.prevent="addIsLiked(restaurant.id)"
          type="button"
          class="btn btn-primary like mr-2"
          :disabled="isProcessing"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { version } from 'vue/types/umd'
import { emptyImageFilter } from '../utils/mixins'
// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  mixins: [ emptyImageFilter ],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isProcessing: false
    }
  },
  methods: {
    // STEP 2: 將 addFavorite 改成 async/await 語法
    async addFavorited(restaurantID) {
      try {
        this.isProcessing = true
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const { data } = await usersAPI.addFavorite({ restaurantID })
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.methods)
        }
        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant = {
          // 複製一份 在覆蓋屬性值
          ...this.restaurant,
          isFavorited: true
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        // STEP 6: 請求失敗的話則跳出錯誤提示
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入到最愛，請稍候再試..'
        })
      }
    },
    async deleteFavorited(restaurantID) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantID })
        if (data.status !== 'success') {
          throw new Error(data.methods)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入到最愛，請稍候再試..'
        })
      }
    },
    async addIsLiked(restaurantID) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addLiked({ restaurantID })
        if (data.status !== 'success') {
          throw new Error(data.methods)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳按讚，請稍後再試..'
        })
      }
    },
    async deleteIsLiked(restaurantID) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({ restaurantID })
        if (data.status !== 'success') {
          throw new Error(data.methods)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法對取消讚，請稍後再試..'
        })
      }
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>