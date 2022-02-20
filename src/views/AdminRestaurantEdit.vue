<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
      :is-processing='isProcessing'
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next){
      console.log('beforeRouteUpdate', to, from)
    // 取得params資料
    const { id } =  to.params
    // 呼叫API方法把取得資料用參數方式帶入
    this.fetchRestaurants(id)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({restaurantId})
        console.log(data.restaurant)
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit(formData) {
      // 送出表單後關閉按紐
      this.isProcessing = true
      try {
        // 透過 API 將表單資料送到伺服器
        const { data } = await adminAPI.restaurants.update({ restaurantId: this.restaurant.id, formData })

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
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
  },
};
</script>
