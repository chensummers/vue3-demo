import { createRouter, createWebHistory } from "vue-router";
import OrderList from "./moudles/order";
import UserList from "./moudles/user";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/login/index.vue"),
    },
    ...OrderList,
    ...UserList,
  ],
});

export default router;
