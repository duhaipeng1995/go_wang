import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
// city
import City from '@/components/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
