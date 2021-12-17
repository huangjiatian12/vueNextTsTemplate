import { createRouter, createWebHistory } from "vue-router";
import { getLocal } from "../utils/storage";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  // let token = getLocal("token");
  // let _to = to.path;
  // if (!token && _to != "/login") {
  //   next("/login");
  // } else if (token && _to == "/login") {
  //   next("/");
  // } else {
  //   next();
  // }
});

export default router;
