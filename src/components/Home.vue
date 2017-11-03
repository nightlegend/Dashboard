<template>
  <div id="home-div">
    <!-- Header -->
    <div id="nav-header" class="row">
      <div class="col-sm-2">
        <img src="../assets/david.png" class="navbar-brand">
      </div>
      <div class="col-sm-offset-10">
        <div>
          <div class="gb_Q">
            <a href="javascript:;" class="gb_P" @click="loginFun">Singin</a>  
          </div>
          <div class="gb_Q">
            <a href="javascript:;" class="gb_P" @click="registerFun">Singup</a>  
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
    <div class="row">
      <button @click="connectSocketServer">connect</button>
    </div>
  </div>
</template>

<script>
import {logoutFun} from '../services/loginButtonHandler.js';
import '../assets/css/layout.css';
import {store} from '../store/session.js';
import {connection} from '../services/socketio.js';
export default {
  name: 'home',
  data () {
    return {
      userName: store.state.userName,
    };
  },
  methods: {
    logoutFun: function () {
      logoutFun({router: this.$router});
    },
    loginFun: function () {
      console.log('Testing......');
    },
    registerFun: function () {
      console.log('Testing......');
    },
    connectSocketServer: function () {
      connection();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-div {
  /*position: static;*/
}
#nav-header {
  height:70px;
  background: white; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(white, white); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(white, white); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(white, white); /* For Firefox 3.6 to 15 */
  background: linear-gradient(white, white); /* Standard syntax (must be last) */
  border-radius: 12px;
  box-shadow: 1px 1px 1px 1px grey;
}
</style>
