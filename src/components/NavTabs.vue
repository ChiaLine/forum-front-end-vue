<template>
  <ul class="nav nav-tabs mb-4">
    <li v-for="tad in tabs" v-bind:key="tad.id" class="nav-item">
      <router-link
        :to="tad.path"
        class="nav-link"
      >
        {{ tad.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {v4 as uuidv4} from 'uuid'

export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          id: uuidv4(),
          title: '美食達人',
          path: '/users/top'
        },
      ]
    }
  }
}
</script>
