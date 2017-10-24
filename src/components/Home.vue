<template>
  <div id="home-div">
    <div id="">
      
    </div>
    <div class="hello">
      <h5>{{ msg }}</h5>
      <button @click="testF">test</button>
    </div>
  </div>
  
</template>

<script>
import {test} from '../services/loginButtonHandler.js';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    testF: function () {
      test();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-div {
  position: static;
}

#grad1 {
  height: 200px;
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(red, yellow); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(red, yellow); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(red, yellow); /* For Firefox 3.6 to 15 */
  background: linear-gradient(red, yellow); /* Standard syntax (must be last) */
}
</style>
