import api from './api'

const authService = {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials)
    const token = response.data.token
    const user = response.data.user

    console.log('respoon data:', response.data)

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    console.log('JSON.stringify(user):', JSON.stringify(user))

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
