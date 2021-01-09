import Vue from 'vue'
import VueRouter from 'vue-router'
import Pyramid from './pages/Pyramid.vue'
import old from './pages/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pyramid',
      component: Pyramid
    },
    {
      path: '/oldversion',
      name: 'old',
      component: old
    }
  ]
})
