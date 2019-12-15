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
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-80916155-1',
  checkDuplicatedScript: true
})

dom.watch()
library.add(faTwitter, faLinkedin, faGithub, faPaperPlane, faPhoneSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
