<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? '處理中':'Submit'}}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization';
import { Toast } from '../utils/helpers';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if ( !this.name ) {
          Toast.fire({
            icon: 'warning',
            title: '請填入名稱',
          })
          return
        } else if ( !this.email ) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email',
          })
          return
        } else if ( this.password.length < 8) {
          Toast.fire({
            icon: 'warning',
            title: '密碼請填入8位數',
          })
          return
        } else if ( this.passwordCheck !== this.password ) {
          Toast.fire({
            icon: 'warning',
            title: '密碼確認失敗，請重新輸入..',
          })
          this.password = ''
          this.passwordCheck = ''
          return
        } 
        // 表單送出後 禁用按鈕
        this.isProcessing = true

        // 透過 API 將資料送到伺服器
        const { data }  = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 成功註冊後轉到登入頁
        this.$router.push('/signin')
      } catch (error) {
        // 恢復按鈕
        this.isProcessing = false
        this.name = ''
        this.email = ''
        this.password = ''
        this.passwordCheck = ''
        Toast.fire({
          icon: 'warning',
          title: '信箱重複，請重新輸入..',
        })
      }
    },
  }
}
</script>