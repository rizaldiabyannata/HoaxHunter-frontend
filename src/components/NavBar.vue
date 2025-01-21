<template>
  <div
    class="flex flex-row justify-between font-geist items-center bg-oxford_blue py-2 px-8 border-b border-honeydew"
  >
    <div class="flex flex-row space-x-6">
      <h2 class="dark:text-white text-white">HoaxHunter</h2>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/about" class="text-white">About</router-link>
    </div>
    <div class="flex items-center space-x-4">
      <router-link v-if="!isAuthenticated" to="/login" class="text-white">Login</router-link>
      <router-link v-if="!isAuthenticated" to="/register" class="text-white">Register</router-link>
      <router-link v-if="isAuthenticated" to="/profile" class="text-white">Profile</router-link>
      <button v-if="isAuthenticated" @click="handleLogout" class="text-white">Logout</button>
      <ToggleSwitchMode />
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import ToggleSwitchMode from './ToggleSwitchMode.vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

// Gunakan computed agar Vue otomatis melacak perubahan state
const isAuthenticated = computed(() => auth.isAuthenticated)

// Pantau perubahan isAuthenticated, arahkan ke /login setelah logout
watch(isAuthenticated, (newValue) => {
  if (!newValue) {
    router.push('/login')
  }
})

const handleLogout = async () => {
  await auth.logout()
}
</script>
