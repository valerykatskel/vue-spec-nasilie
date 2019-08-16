import Vue from 'vue'
import App from './App.vue'

var SocialSharing = require('vue-social-sharing')

import './assets/scss/main.scss'

Vue.use(SocialSharing)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
