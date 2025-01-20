import { useAuthStore } from '@/stores/auth'

export default function authMiddleware({ to, next }) {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    return next({ name: 'login' })
  }

  // Cek role jika meta.roles ada
  if (to.meta.roles && !to.meta.roles.includes(authStore.user?.role)) {
    return next({ name: '401' }) // Redirect ke error 401 jika role tidak sesuai
  }

  return next()
}
