<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{ user.CommentsLength }}</strong> 已評論餐廳</li>
          <li><strong>{{ user.FavoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
          <li><strong>{{ user.FollowingsLength}}</strong> followings (追蹤者)</li>
          <li><strong>{{ user.FollowersLength}}</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <button type="submit" class="btn btn-primary" v-if="currentUser.isAdmin">Edit</button>
        <form action="/following/3" method="POST" style="display: contents" v-else>
          <button type="submit" class="btn btn-danger"
          v-if="isFollowed" @click.stop.prevent="deleteFollowed"
          >取消追蹤</button>
          <button type="submit" class="btn btn-primary" v-else
          @click.stop.prevent="addFollowed">追蹤</button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "isAdmin": true
  },
  isAuthenticated: true
}

export default {
  props: {
    user: {
      type: Object,
      require: true
    },
    initiaIsFollowed: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      isFollowed: this.initiaIsFollowed
    }
  },
  methods: {
    addFollowed(){
      this.isFollowed = true
    },
    deleteFollowed(){
      this.isFollowed = false
      
    }
  }
}
</script>