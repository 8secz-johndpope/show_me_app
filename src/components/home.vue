<template>
  <div class="home">
    <div>
  <b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">NavBar</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <b-button class="btn btn-primary" @click="signOut">Sign out</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-collapse>
  </b-navbar>

</div>
  </div>
</template>


<script>
import firebase from 'firebase'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: firebase.auth().currentUser.email
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style scoped>
@import "./css/home.css";
</style>
