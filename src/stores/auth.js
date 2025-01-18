import { defineStore } from 'pinia'
import authService from '@/service/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // Data user setelah login
    errorMessage: '', // Menyimpan error jika login gagal
  }),
  actions: {
    async login(credentials) {
      try {
        const user = await authService.login(credentials)
        this.user = user // Simpan user setelah login berhasil
        this.errorMessage = '' // Reset error jika berhasil login
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.error || 'Unknown error')
      }
    },
    logout() {
      this.user = null
      authService.logout()
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // True jika user sudah login
  },
})
