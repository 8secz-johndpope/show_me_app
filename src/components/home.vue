<template>
  <div class="app">
    <div class="navbardiv">
  <b-navbar toggleable="lg" class="navbar">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
<div class="post">
<div class="mypost">
  <input v-model="msg" placeholder="edit me">
<p>Message is: {{ msg }}</p>
</div>
<div class="friendspost">
</div>
  <b-button @click="post">I am a Button</b-button>
</div>

  <footer>
      (c)copy right
    </footer>
</div>
</template>
<script>

import firebase, { firestore } from 'firebase'

export default {
  name: 'home',
  data () {
    return {
      msg: '',
      user: firebase.auth().currentUser
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    },
    post: function (){
      firebase.firestore().doc(this.user.email+'/posts').collection("postsid").add({
    msg: this.msg
})
    }
  }
}
</script>
<style scoped>
@import "./css/home.css";
</style>
