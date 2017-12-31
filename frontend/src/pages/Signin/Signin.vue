<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <b-form-group
        label="Enter your user id"
      >
        <b-form-input type="text"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Enter your password"
      >
        <b-form-input type="password"></b-form-input>
      </b-form-group>
      <b-button size="lg" variant="success">Signin</b-button>
    </form>
    <router-link :to="{ name:'Signup' }">Sigiup</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
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
