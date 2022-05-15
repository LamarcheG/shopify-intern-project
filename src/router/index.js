import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/Landing-page.vue'
import Home from '../views/Home.vue'
import ShopifyQA from '../views/Business-decision.vue'
import storyMaker from '../views/Story-maker.vue'
import InterviewAnswers from '../views/Interview-Answers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/General',
    name: 'General',
    component: Home
  },
  {
    path: '/InterviewAnswers',
    name: 'InterviewAnswers',
    component: InterviewAnswers
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
