import { createRouter, createWebHistory } from "vue-router";
import ApplicationsView from "@/views/ApplicationsView/index.vue";
import BanksView from '@/views/BanksView/index.vue';
import ReportsView from '@/views/ReportsView/index.vue';
import DetailView from '@/views/DetailView/index.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "applications",
      component: ApplicationsView,
    },
    {
      path: "/banks",
      name: "banks",
      component: BanksView,
    },
    {
      path: "/reports",
      name: "reports",
      component: ReportsView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    }
  ],
});

export default router;
