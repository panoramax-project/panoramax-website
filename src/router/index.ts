import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FaqView from '../views/FaqView.vue'

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
      path: '/a-propos',
      name: 'a-propos',
      component: AboutView
    }
  ]
})

export default router
