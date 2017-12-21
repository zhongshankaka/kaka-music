import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import '@/common/scss/index.scss'

import attachFastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

attachFastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('@/common/img/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  router,
  render: h => h(App)
})
