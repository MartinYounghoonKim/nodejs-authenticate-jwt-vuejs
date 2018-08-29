import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Signin from '@/pages/Signin/Signin.vue';
import Signup from '@/pages/Signup/Signup.vue';
import Home from '@/pages/Home/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/',
            name: 'Signin',
            component: Signin
        }, {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
});
