<template>
  <div>
    <div>Login Page</div>
    <div>
      <label>账户：</label><input type="text" name="userName" placeholder="UserName" v-model="userName">
    </div>
    <div>
      <label>密码：</label><input type="password" name="password" placeholder="Password" v-model="password">
    </div>
    <div><button id="loginBtn" @click="loginFun">登录</button><button id="registerBtn" @click="registerBtn">注册</button></div>
  </div>
</template>

<script>
  import {login, register} from '../../services/loginButtonHandler.js'
  export default {
    name: 'login',
    data () {
      return {
        message: 'Welcome to login..',
        userName: '',
        password: ''
      }
    },
    methods: {
      loginFun: function () {
        login({
          userName: this.userName,
          password: this.password,
          router: this.$router
        })
      },
      registerBtn: function () {
        register({router: this.$router})
      }
    }
  }
</script>