<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
// import {v4 as uuidv4} from 'uuid'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    handleSubmit() {
      // 透過 API 向伺服器 請求 新增一筆評論資料
      // 傳遞給父元件修改資料
      this.$emit('after-create-comment', {
        // commentId: uuidv4(),
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = ''
    }
  },
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>