import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import media from "./assets/media.scss"
import {BootstrapVue} from 'bootstrap-vue'
import pagination from 'vue-bootstrap-pagination'

Vue.config.productionTip = false

Vue.use(BootstrapVue) 

new Vue({
  router,
  store,
  media,
  pagination,
  render: h => h(App)
}).$mount('#app')

