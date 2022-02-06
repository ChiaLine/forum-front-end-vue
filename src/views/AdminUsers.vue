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
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$G70ZmsHRXYWWd0qjkP441ukpCBAeXAeUwXNlhIOr.oa8BuC8jORLS",
      isAdmin: true,
      image: null,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$UCwA0gYP2eR.2VTRpaByGeyUlwjshzDh6ekc1oGKHcEjkkc5crh5u",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$uPopN.W5QzSZMnRTmEm.De.ZPV7YKuExI0iJqub425gZYPVwEc1P6",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
    },
  ],
};

export default {
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
    fetchUsers() {
      this.users = dummyData.users.map( user => {
        return {
          ...user,
          isAuthenticated: user.isAdmin,
        }
      })
    },
    toggleUserRole(userId) {
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
