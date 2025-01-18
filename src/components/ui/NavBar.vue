<template>
  <div
    class="flex flex-row justify-between font-geist items-center bg-zinc-900 py-2 px-8 border-b border-zinc-500"
  >
    <div class="flex flex-row space-x-6">
      <h2 class="dark:text-white">HoaxHunter</h2>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/about" class="text-white">About</router-link>
    </div>
    <div class="flex items-center space-x-4">
      <router-link v-if="!auth.isAuthenticated" to="/login" class="text-white">Login</router-link>
      <router-link v-if="!auth.isAuthenticated" to="/register" class="text-white"
        >Register</router-link
      >
      <router-link v-if="auth.isAuthenticated" to="/profile" class="text-white"
        >Profile</router-link
      >
      <button v-if="auth.isAuthenticated" @click="handleLogout" class="text-white">Logout</button>
      <ToggleSwitchMode />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import ToggleSwitchMode from './ToggleSwitchMode.vue'

const auth = useAuthStore()

import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>
