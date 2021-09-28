import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/shopcard",
    name: "ShopCardView",
    component: () => import("../views/ShopCard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes,
});

export default router;
