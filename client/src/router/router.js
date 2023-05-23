import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/basket',
    name: 'basket',
    component: () => import('@/components/CustomerBasket/CustomerBasket.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
