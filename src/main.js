import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import './assets/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faPlaystation,
  faSpotify
} from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faPhoneSquare,
  faFutbol,
  faPlaneDeparture,
  faCat,
  faMotorcycle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router.js'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-80916155-1',
  checkDuplicatedScript: true
})

dom.watch()
library.add(faTwitter, faLinkedin, faGithub, faPaperPlane, faPhoneSquare, faPlaystation, faSpotify, faFutbol, faPlaneDeparture, faCat, faMotorcycle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
