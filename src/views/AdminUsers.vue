<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button type="button" class="btn btn-link" v-if="user.isAdmin" v-show="!user.isAuthenticated" @click.stop.prevent="toggleUserRole(user.id)">set as user</button>
            <button type="button" class="btn btn-link" v-else @click.stop.prevent="toggleUserRole(user.id)">set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users.map( user => {
          return {
            ...user,
            isAuthenticated: user.isAdmin,
          }
         })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }     
    },
    async toggleUserRole(userId) {
       this.users = this.users.map(user => {
          if(user.id === userId){
            return {
              ... user,
              isAdmin: !user.isAdmin
            }
          }
          return user
        })
    }
  }
};
</script>
