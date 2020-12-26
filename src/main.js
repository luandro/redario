import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
