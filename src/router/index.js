import { createWebHistory, createRouter } from "vue-router";
const Home = () => import ("../views/Home.vue");
const Arenda = () => import ("../views/Arenda.vue");
const Services = () => import ("../views/Services.vue");
const About = () => import ("../views/About.vue");
const Contacts = () => import ("../views/Contacts.vue");

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