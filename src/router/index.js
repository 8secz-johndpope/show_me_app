import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Auth from "@/components/Auth";
import Dashboard from "@/components/Dashboard";
import Settings from "@/components/Settings";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/dashboard"
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next("/auth");
  } else if (currentUser && to.name == "Auth") {
    router.push({ name: "Dashboard" });
    console.log(currentUser);
    next("/dashboard");

  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
