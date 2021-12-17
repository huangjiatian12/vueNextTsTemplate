import { RouteRecordRaw } from "vue-router";
const IndexPage = () => import("pages/index.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "index", component: IndexPage },
];

export default routes;
