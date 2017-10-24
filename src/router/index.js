import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/user/Login';
import Register from '@/components/user/Register';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Rigster',
      component: Register,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
    },
  ],
});
