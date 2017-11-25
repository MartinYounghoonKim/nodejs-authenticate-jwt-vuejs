import Vue from 'vue';
import Router from 'vue-router';
import Signin from '@/components/Signin';
import Signup from '@/components/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
});
