import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import businessDecision from '../views/Business-decision.vue'
import storyMaker from '../views/Story-maker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/businessDecision',
    name: 'businessDecision',
    component: businessDecision
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
