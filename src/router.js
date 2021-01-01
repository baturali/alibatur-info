import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/Home.vue'
import triangles from './pages/Triangles.vue'
import threeDangle from './pages/threeDangle.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/triangles',
      name: 'triangles',
      component: triangles
    },
    {
      path: '/3dangle',
      name: '3dangle',
      component: threeDangle
    }
  ]
})
