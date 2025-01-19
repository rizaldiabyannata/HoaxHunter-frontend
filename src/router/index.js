import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Error404View from '@/views/error/Error404View.vue'
import Error401View from '@/views/error/Error401View.vue'
import Error500View from '@/views/error/Error500View.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/error-404',
      name: '404',
      component: Error404View,
    },
    {
      path: '/error-401',
      name: '401',
      component: Error401View,
    },
    {
      path: '/error-500',
      name: '500',
      component: Error500View,
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
