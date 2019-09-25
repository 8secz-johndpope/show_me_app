// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDKzVOULbKvuvzptVXO-Wt7vz5gvbtohXI",
  authDomain: "webproject-ef5ac.firebaseapp.com",
  databaseURL: "https://webproject-ef5ac.firebaseio.com",
  projectId: "webproject-ef5ac",
  storageBucket: "",
  messagingSenderId: "823336720817",
  appId: "1:823336720817:web:cef9b067ab597054f64590"
};

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
