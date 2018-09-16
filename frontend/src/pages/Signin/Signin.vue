<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <form @submit.prevent="signin">
            <b-form-group label="Enter your user id">
                <b-form-input v-model="uid" type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="Enter your password">
                <b-form-input v-model="password" type="password"></b-form-input>
            </b-form-group>
            <b-button size="lg" variant="success" type="submit">Signin</b-button>
        </form>
        <router-link :to="{ name:'Signup' }">Sigiup</router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Signin',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                uid: '',
                password: '',
            };
        },
        methods: {
            signin () {
                const uid = this.uid;
                const password = this.password;

                if (!uid || !password) {
                    return false;
                }

                axios.post('http://localhost:3000/auth/signin', { uid, password })
                    .then(res => {
                        if (res.status === 200) {
                            alert('로그인 성공');
                            document.cookie = `accessToken=${res.data.data.accessToken}`;
                            document.cookie = `refreshToken=${res.data.data.refreshToken}`;
                            axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken;
                            this.$router.push({ name: 'Home' });
                        }
                    })
                    .catch(err => {
                        alert('로그인 실패');
                    })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .btn-lg {
        width: 100%;
    }
</style>
