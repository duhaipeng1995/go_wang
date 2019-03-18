// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入演示300毫秒的包
import fastClick from 'fastclick'
// 初始化样式
import './assets/styles/reset.css'
// 1像素边框问题
import './assets/styles/border.css'
// 导入swiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入swiper轮播css
import 'swiper/dist/css/swiper.css'
// 使用fastClick,attach是使用fastClick一个方法
import axios from 'axios'
Vue.prototype.$axios = axios
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
