import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from "./assets/style.scss"
import {BootstrapVue} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue) 

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')

