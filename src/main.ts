import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "lib-flexible"
const app = createApp(App);
app.use(router).mount("#app");
