import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import api from '@/service/api'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Error404View from '@/views/error/Error404View.vue'
import Error401View from '@/views/error/Error401View.vue'
import Error403View from '@/views/error/Error403View.vue'
import Error500View from '@/views/error/Error500View.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, role: 'admin' },
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
      path: '/error-403',
      name: '403',
      component: Error403View,
    },
    {
      path: '/error-500',
      name: '500',
      component: Error500View,
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  try {
    const response = await api.get('/auth/check', { withCredentials: true })
    authStore.user = response.data.user
  } catch {
    authStore.user = null
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.role && authStore.user?.role !== to.meta.role) {
    next('/error-401')
  } else {
    next()
  }
})

export default router
