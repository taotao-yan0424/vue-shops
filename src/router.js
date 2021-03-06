import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }]
})
