import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShopifyQA from '../views/Business-decision.vue'
import storyMaker from '../views/Story-maker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ShopifyQA',
    name: 'ShopifyQA',
    component: ShopifyQA
  },
  {
    path: '/storyMaker',
    name: 'storyMaker',
    component: storyMaker
  },
]

const router = new VueRouter({
  routes
})

export default router
