import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Card from '../components/Card.vue'
import Mentor from '../components/Mentor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/banner',
    name: 'Banner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Banner.vue')
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/mentor',
    name: 'Mentor',
    component: Mentor
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
