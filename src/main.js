import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
if (process.env.VUE_APP_MOCK && (process.env.NODE_ENV === 'development')) {
  require("./mock")
}
import './useVant'
import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
