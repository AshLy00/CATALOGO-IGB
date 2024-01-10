import { createApp } from "vue";
import "./assets/base.css";
import "./assets/style.css";
import "./components/home/HeroHome.vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
