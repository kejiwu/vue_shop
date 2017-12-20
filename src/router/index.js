import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import classify from '../components/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      }, 
      {
      path: '/shop',
      name: 'shop',
      component: require('../components/shop'),
      }
  ]
})
