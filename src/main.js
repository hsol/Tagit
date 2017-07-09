// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueTouch from 'vue-touch/dist/vue-touch'
import { directive as onClickOutside } from 'vue-on-click-outside'

import firebaseConfig from './config/firebase.json'
import firebase from 'firebase'

import '../node_modules/reset-css/reset.css'

Vue.use(vueTouch, {name: 'v-touch'})
Vue.directive('on-click-outside', onClickOutside)

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false
Vue.firebase = firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
