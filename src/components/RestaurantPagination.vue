<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: {
              page: previousPage,
              categoryId: categoryId
            }
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁籤 -->
      <li :class="['page-item', { active: page === currentPage}]" v-for="page in totalPage" :key="page">
        <router-link
          :to="{
            name: 'restaurants',
            query: {
              page: page,
              categoryId: categoryId
            }
          }"
          class=page-link
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li :class="['page-item', { disabled: currentPage ===  totalPage.length}]">
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{
            name: 'restaurants',
            query: {
              page: nextPage,
              categoryId: categoryId
            }
          }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [ Number, String ],
      default: ''
    },
    // 現在在第幾頁
    currentPage: {
      // 傳進的資料是數字
      type: Number,
      // 預設在第一頁
      default: 1,
    },
    // 總共有幾頁
    totalPage: {
      // 傳進的資料是陣列
      type: Array,
      // 必填資料
      required: true
    },
    // 前一頁
    previousPage: {
      type: Number,
      required: true
    },
    // 下一頁
    nextPage: {
      type: Number,
      required: true
    },
  }
}
</script>