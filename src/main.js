import Vue from 'vue'
import router from './router'
import Buefy from 'buefy'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'
import './registerServiceWorker'
import './sass/global.scss'
import 'vue-swatches/dist/vue-swatches.min.css'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'far'
})
Vue.component('vue-fontawesome', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
