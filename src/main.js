import "./assets/css/base.css";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapMarkerAlt,
  faCrosshairs,
  faArrowCircleUp,
  faTimes,
  faSearch,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt);
library.add(faCrosshairs);
library.add(faArrowCircleUp);
library.add(faTimes);
library.add(faSearch);
library.add(faChevronRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
  store,
  render: (h) => h(App),
});

app.$mount("#app");
