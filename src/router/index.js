import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Banner from '../components/Banner.vue'
import Card from '../components/Card.vue'
import Find from '../components/Find.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/About.vue')
    }
  },
  {
    path: '/banner',
    name: 'Banner',
    component: Banner
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
