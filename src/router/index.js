import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Arenda from "../views/Arenda.vue";
import Services from "../views/Services.vue";
import About from "../views/About.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "Главная",
    component: Home,
  },
  {
    path: "/arenda",
    name: "Аренда спецтехники",
    component: Arenda,
  },
  {
    path: "/services",
    name: "Услуги",
    component: Services,
  },
  {
    path: "/about",
    name: "О компании",
    component: About,
  },
  {
    path: "/contacts",
    name: "Контакты",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;