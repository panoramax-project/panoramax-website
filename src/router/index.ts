import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FaqView from '../views/FaqView.vue'
import ContributeView from '../views/ContributeView.vue'
import Ay11View from '../views/Ay11View.vue'
import PicturesView from '../views/PicturesView.vue'
import UseCasesView from '../views/UseCasesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foire-aux-questions',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/comment-participer-a-panoramax',
      name: 'contribute',
      component: ContributeView
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/photos',
      name: 'pictures',
      component: PicturesView
    },
    {
      path: '/cas-d-usage',
      name: 'useCase',
      component: UseCasesView
    },
    {
      path: '/accessibilite',
      name: 'ay11',
      component: Ay11View
    }
  ]
})

export default router
