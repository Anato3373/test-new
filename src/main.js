import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import media from "./assets/media.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  media,
  render: h => h(App)
}).$mount('#app')

