<template>
  <div id="register">
    <div>
      <input type="text" name="userName" placeholder="用户名" v-model="userName">
    </div>
    <div>
      <input type="password" name="password" placeholder="密码" v-model="password">
    </div>
    <div>
      <input type="email" name="email" placeholder="邮箱" v-model="email">
    </div>
    <div>
      <button id="registreBtn" @click="registerFun">注册</button>
    </div>
  </div>
</template>

<script>
  import registerHandler from '../../services/registerHandler.js'
  export default {
    name: 'register',
    data () {
      return {
        status: 200,
        userName: '',
        password: '',
        email: '',
        registerStatus: false
      }
    },
    methods: {
      registerFun: function () {
        registerHandler({
          userName: this.userName,
          password: this.password,
          email: this.email,
          router: this.$router
        })
      }
    }
  }
</script>