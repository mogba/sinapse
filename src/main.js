import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch, faPlusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

require('@/assets/main.scss');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
