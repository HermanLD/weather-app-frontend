import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/base.css";

Vue.config.productionTip = false;

const app = new Vue({
  store,
  render: (h) => h(App),
});

app.$mount("#app");
