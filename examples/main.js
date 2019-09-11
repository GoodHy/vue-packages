import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// main.js

// 导入组件库
import ColorPicker  from '../packages/index';
// 注册组件库
Vue.use(ColorPicker);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
