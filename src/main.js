import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import getComponent from '@/plugins/ant'
import { setRem } from '@/utils/rem.js'
getComponent()
Vue.config.productionTip = false
setRem()
window.onresize = () => {
  setRem()
}
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
