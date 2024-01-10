import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/",
      name: "product",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
