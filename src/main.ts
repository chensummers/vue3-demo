import { createApp } from "vue";
import pinia from "@/stores/store";

import App from "./App.vue";
import router from "./router";
import { Button } from "vant";
import "vant/lib/index.css";

import "./assets/main.css";

const app = createApp(App);

// 引入vant component
app.use(Button);
app.use(pinia).use(router).mount("#app");
