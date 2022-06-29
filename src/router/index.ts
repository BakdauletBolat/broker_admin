import { createRouter, createWebHistory } from "vue-router";
import ApplicationsView from "../views/ApplicationsView/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "applications",
      component: ApplicationsView,
    }
  ],
});

export default router;
