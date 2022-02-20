<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
    @after-submit="handleaFterSubmit" 
    :is-processing='isProcessing'
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleaFterSubmit(formData) {
      console.log(formData);
      try {
        // 送出表單後關閉按紐
        this.isProcessing = true
        // 透過 API 將表單資料送到伺服器
        const { data } = await adminAPI.restaurants.create({ formData })
        console.log(data);
        // 新增失敗就拋出錯誤
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // 成功就跳轉到後台餐廳列表
        this.$router.push({ name: 'admin-restaurants'})
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    },
  },
};
</script>
