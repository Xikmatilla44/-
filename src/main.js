import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Object.defineProperty(Vue.prototype, '$axios', {value: axios});

Vue.config.productionTip = false;
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
