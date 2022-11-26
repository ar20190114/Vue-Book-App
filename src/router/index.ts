import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book/form",
    name: "bookForm",
    component: FormView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
