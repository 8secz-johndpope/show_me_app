
<template>
  <div class="signin">
    <img src="../assets/logo.png">
    <h2>Sign in</h2>
    <input type="text" placeholder="email" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button class="btn btn-primary" @click="signIn">Signin</button>
    <p>You don't have an account?<router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/home')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style>
@import "./css/Signin.css";
</style>
