<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initial-restaurant="restaurant"
      :restaurantComments="restaurantComments"
    />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :initial-restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "./../utils/helpers";
// 取得 user 登入資料
import { mapState } from 'vuex'

export default {
  name: "restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  computed: {
    // 取得 user 登入資料 自動在data內產生currentUsery 資料
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate (to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
        console.log('fetchRestaurant',restaurantId)
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試..",
        });
      }
    },
    async afterDeleteComment(id) {
      console.log(id)
      try {
        const  {data}  = await restaurantsAPI.deleteComment(id)

        if (data.status !== 'success') {
          throw new Error(data.methods)
        }

        // 刪除id相同的資料
        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== id
        );
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試..'
        })
      }
    },
    async afterCreateComment(payload) {
      console.log(this.$route.params.id)
      try {
        const {data}  = await restaurantsAPI.addComment(payload)
        console.log(data)

        if (data.status !== 'success') {
          throw new Error(data.methods)
        }

        this.fetchRestaurant(this.$route.params.id)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試..'
        })
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>
