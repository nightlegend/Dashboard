<template>
  <div id="register-div">
    <div id="login-div-left">
      <img src="../../assets/david.png" class="image">
    </div>
    <div id="login-div-right">
      <div id="register-form">
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
          <button  @click="registerFun" class="button">注册</button><button @click="loginFun" class="button">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/from.css'
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
      },
      loginFun: function () {
        this.$router.push(`/login`)
      }
    }
  }
</script>