// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/Layout/Layout.vue"),
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("@/views/Users/Users.vue"),
      },
    ],
  },
  // Catch-all route for 404 Not Found pages
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  linkExactActiveClass: "active-route",
  history: createWebHistory(import.meta.env.BASE_URL), // Uses the HTML5 history mode
  routes,
});

// Optional: Global navigation guard example
router.beforeEach((_to, _from, next) => {
  next();
});

export default router;
