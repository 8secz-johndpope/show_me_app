<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="dashboard">
          <h3>show me app!</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="settings">Settings</router-link>
          </li>
          <li>
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>
<style scoped>
li {
  display: inline-block;
  width: 25%;
}
</style>

<script>
const fb = require("../firebaseConfig.js");

export default {
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/auth");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>