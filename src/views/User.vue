<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!-- 用户资料卡 UserProfileCard -->
        <UserProfileCard
          :user="user"
          :is-current-user="currentUser.id === user.id"
          :initial-is-followed="isFollowed"
        />
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- 用户关注 UserFollowingsCard -->
          <UserFollowingsCard :followings="followings" />
          <br />
          <!-- 用户追随者 UserFollowersCard -->
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <!-- 用户评论 UserCommentsCard -->
          <UserCommentsCard :comments="comments" />
          <br />
          <!-- 用户最喜欢的餐厅 UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
// 取得 user 登入資料
import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  computed: {
    // 取得 user 登入資料 自動在data內產生currentUser 資料
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next){
    const { id } =  to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data }  = await usersAPI.getUse(userId)
        
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile

        // 處理 comment.Restaurant 可能有空值的情況
        const commentSet = new Set()
        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        )
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試..'
        })
      }
    }
  },
};
</script>
