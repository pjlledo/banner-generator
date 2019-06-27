import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'
import './registerServiceWorker'
import './global.scss'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'far'
})
Vue.component('vue-fontawesome', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
