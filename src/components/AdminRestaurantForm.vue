<template>
  <form @submit.stop.prevent="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
        v-model="restaurant.name"
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
        v-model="restaurant.categoryId"
      >
        <option selected disabled>--請選擇--</option>
        <option
          :value="categorie.id"
          v-for="categorie in categories"
          :key="categorie.id"
        >
          {{ categorie.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        v-if="restaurant.image"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary"
    :disabled="isProcessing"
    >{{ isProcessing ? '處理中' : '送出'}}</button>
  </form>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          tel: "",
          address: "",
          openingHours: "",
          description: "",
          image: "",
          categoryId: "",
        };
      },
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant,
      },
      isLoading: true,
    };
  },
  watch: {
    // 監聽資料更新時，請重新賦值
    initialRestaurant(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        // 等拿到API資料才秀出表單
        this.isLoading = false
        this.categories = data.categories
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    handleFileChange(e) {
      const { files } = e.target;
      // console.log(files)
      if (files.length === 0) {
        // 使用者沒有上傳檔案
        this.restaurant.image = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      // 表單送出前防止空白
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      // 取得表單區 element資料
      const form = e.target;
      // console.log(form)
      // 建立表單資料
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
