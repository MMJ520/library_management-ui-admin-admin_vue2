import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element ui组件
import './plugin/element_ui'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
