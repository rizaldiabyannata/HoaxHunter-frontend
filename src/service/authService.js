import api from './api'

const authService = {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials, { withCredentials: true })
    const token = response.data.token
    const user = response.data.user

    console.log('respoon data:', response)

    localStorage.setItem('token', token)

    return user
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    sessionStorage.removeItem('token')
    api.post('/auth/logout')
  },
}

export default authService
