<template>
  <div id="login-div">
    <div>
      
    </div>
    <div id="login-div-left">
      <img src="../../assets/david.png" class="image">
    </div>

    <div id="login-div-right">
      <div id="login-form">
        <div id="login-item">
          <input type="text" name="userName" placeholder="账户" v-model="userName">
        </div>
        <div id="login-item">
          <input type="password" name="password" placeholder="密码" v-model="password">
        </div>
        <div id="login-item"><button id="loginBtn" @click="loginFun" class="button">登录</button><button id="registerBtn" @click="registerBtn" class="button">注册</button> </div>
      </div>
    </div>

  </div>
</template>

<script>
  import '../../assets/css/from.css'
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