import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Partidas from '../views/Partidas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/partidas',
    name: 'partidas',
    component: Partidas
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
