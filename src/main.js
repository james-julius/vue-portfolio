import Vue from 'vue'
import App from './App.vue'
// Plugins
import VueRouter from 'vue-router';
import VueParticles from 'vue-particles';
import Vuelidate from 'vuelidate';

// Vue configuration
Vue.config.productionTip = false
Vue.use(VueParticles);
Vue.use(VueRouter);
Vue.use(Vuelidate);

// Vue Router setup
import routes from './routes.js';
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
