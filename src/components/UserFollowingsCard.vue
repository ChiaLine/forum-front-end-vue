<template>
  <div class="card">
    <div class="card-header"><strong>{{ followings.length }}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <img
      v-for="following in followings" :key="following.id"
      :src="following.image | emptyImage"
      width="60px" height="60px" class="mr-1 mb-1">
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
export default {
  mixins: [ emptyImageFilter ],
  props: {
    followings: {
      type: Array,
      require: true
    },
  }
}
</script>