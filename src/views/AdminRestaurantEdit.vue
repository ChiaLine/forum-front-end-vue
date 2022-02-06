<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

const dummyData = {
  restaurant: {
    id: 2,
    name: "Meta Howe",
    tel: "402.522.3339 x939",
    address: "694 Breitenberg Neck",
    opening_hours: "08:00",
    description: "beatae",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=2.6238788574246996",
    viewCounts: 0,
    createdAt: "2022-01-29T12:03:27.000Z",
    updatedAt: "2022-01-29T12:03:27.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
    },
  },
};

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
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("restaurantId", restaurantId);
      const { restaurant } = dummyData;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        CategoryId: categoryId,
      } = restaurant;
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
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
