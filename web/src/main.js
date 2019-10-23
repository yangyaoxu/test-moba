import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
