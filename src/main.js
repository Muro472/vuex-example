import Vue from 'vue'
import App from './App.vue'

import store from './store' //імпортування store

Vue.config.productionTip = false

new Vue({
  store,//та додавання його до проекту
  render: h => h(App),
}).$mount('#app')
