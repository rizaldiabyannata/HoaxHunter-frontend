import api from './api'

const authService = {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials, { withCredentials: true })
    const token = response.data.token
    const user = response.data.user

    localStorage.setItem('token', token)

    return user
  },

  async logout() {
    await api.post('/auth/logout', {}, { withCredentials: true })
    localStorage.removeItem('token') // Pastikan token dihapus
    sessionStorage.removeItem('token')
  },
}

export default authService
