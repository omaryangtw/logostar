import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDoubleRight,
  faBars,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faFacebookSquare,
  faInstagram,
  faLine,
  faAngleDoubleRight,
  faPlus,
  faBars,
  faTimes
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
