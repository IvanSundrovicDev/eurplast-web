import Vue from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import 'leaflet/dist/leaflet.css';
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'
import inViewportDirective from 'vue-in-viewport-directive'

Vue.directive('in-viewport', inViewportDirective)

Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
