import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

//import your scss here
import "@/styles/scss/style.scss";

createApp(App).use(router).mount("#app");
