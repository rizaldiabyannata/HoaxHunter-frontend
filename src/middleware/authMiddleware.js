import { useAuthStore } from '@/stores/auth'

export default function authMiddleware(to, from, next) {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    next({ name: 'login' }) // Redirect to login if not authenticated
  } else if (to.meta && to.meta.roles && !to.meta.roles.includes(authStore.user.role)) {
    next({ name: '401' }) // Redirect to unauthorized page if role is not allowed
  } else if (to.meta && to.meta.adminOnly && authStore.user.role !== 'admin') {
    next({ name: '401' }) // Redirect to unauthorized page if not admin
  } else {
    next()
  }
}
