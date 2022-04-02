import { createRouter, createWebHistory } from "vue-router";
import home from "../components/Home.vue";
import ClientView from "../views/ClientView";
import AdminView from "../views/AdminView";
import About from "../components/About.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/ClientArea",
    name: "ClientArea",
    component: ClientView,
  },

  {
    path: "/AdminArea",
    name: "Admin",
    component: AdminView,
  },
  {
  path: "/admin",
  name: "admin",
  component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
