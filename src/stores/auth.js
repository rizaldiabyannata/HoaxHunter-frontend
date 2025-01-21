import { defineStore } from 'pinia'
import authService from '@/service/authService'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router' // Import the router

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    errorMessage: '',
  }),
  actions: {
    async login(credentials) {
      try {
        const user = await authService.login(credentials)
        this.user = { email: user.email, role: user.role } // Simpan hanya data yang diperlukan
        this.errorMessage = ''
        notify({
          type: 'success',
          title: 'Login success',
          text: `Welcome back! ${user.username}`,
        })
      } catch (error) {
        this.errorMessage = error.response?.data?.error || 'Unknown error'
        notify({
          type: 'error',
          title: 'Login failed',
          text: this.errorMessage,
        })
      }
    },
    async logout() {
      try {
        await authService.logout()
        this.user = null
        notify({
          type: 'success',
          title: 'Logout success',
          text: 'You have been logged out',
        })
        router.push('/login')
      } catch (error) {
        this.errorMessage = error.response?.data?.error || 'Unknown error'
        notify({
          type: 'error',
          title: 'Logout failed',
          text: this.errorMessage,
        })
        router.push('/login')
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
