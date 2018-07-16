<template>
    <div class="hello">
        <h1>Signup Form</h1>
        <form @submit.prevent="signup">
            <b-form-group label="Enter your user id">
                <b-form-input type="text"
                              v-model="uid"></b-form-input>
            </b-form-group>
            <b-form-group label="Enter your password">
                <b-form-input type="password"
                              v-model="password"></b-form-input>
            </b-form-group>
            <b-button size="lg"
                      variant="success"
                      type="submit">
                Signup
            </b-button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Signup',
        data () {
            return {
                uid: '',
                password: ''
            };
        },
        methods: {
            signup () {
                const uid = this.uid;
                const password = this.password;
                if (!uid || !password) {
                    return false;
                }

                axios.post('http://localhost:3000/signup', { uid, password })
                    .then(res => {
                        console.log(res);
                    });
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
