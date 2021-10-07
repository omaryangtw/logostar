import { createRouter, createWebHistory } from "vue-router";

let history = createWebHistory();
let routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/trademark",
    name: "Trademark",
    component: () => import("../views/Trademark.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/thankyou",
    name: "Thank",
    component: () => import("../views/Thank.vue"),
  },
];

export default createRouter({ history, routes });
