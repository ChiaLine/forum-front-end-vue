<template>
  <div class="card">
    <div class="card-header"><strong>{{ followers.length }}</strong> followers (追隨者)</div>
    <div class="card-body">
      <a href="/users/1" v-for="follower in followers" :key="follower.id">
        <img
          :src="follower.image | emptyImage"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
export default {
  mixins: [ emptyImageFilter ],
  props: {
    followers: {
      type: Array,
      require: true
    },
  }
}
</script>