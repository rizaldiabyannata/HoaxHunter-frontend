import { defineStore } from 'pinia'
import authService from '@/service/authService'

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
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.error || 'Unknown error')
      }
    },
    async logout() {
      await authService.logout()
      this.user = null
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
