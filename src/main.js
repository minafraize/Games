import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './router/router'
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Bootstrap
Vue.use(BootstrapVue)
// Router
Vue.use(vueRouter);

const router = new vueRouter({
  routes: Routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
