import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "./utils/axios";
import vant from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";

const app = createApp(App);
app.use(router).use(store).use(vant).mount("#app");

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;
