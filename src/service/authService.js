import api from './api'

const authService = {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials)
    const token = response.data.token

    localStorage.setItem('token', token)
    return response.data
  },

  logout() {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
  },
}

export default authService
