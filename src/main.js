import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import './registerServiceWorker'
import './global.scss'

library.add(faUpload)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
