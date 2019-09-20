import Vue from 'vue'
import router from './router'
import Buefy from 'buefy'
import VueTour from 'vue-tour'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'
import './registerServiceWorker'
import './sass/global.scss'
import 'vue-swatches/dist/vue-swatches.min.css'
import 'vue-tour/dist/vue-tour.css'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'far'
}).use(VueTour)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
