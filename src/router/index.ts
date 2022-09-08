import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Test from "../pages/test.vue";
import Home from "../pages/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Test",
    component: Test,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
