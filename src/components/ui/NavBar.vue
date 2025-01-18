<template>
  <div
    class="flex flex-row justify-between font-geist items-center bg-zinc-900 py-2 px-8 border-b border-zinc-500"
  >
    <div class="flex flex-row space-x-6">
      <h2 class="dark:text-white">HoaxHunter</h2>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/" class="text-white">Home</router-link>
    </div>
    <div class="flex items-center space-x-4">
      <router-link to="/login" class="text-white">Login</router-link>
      <router-link to="/register" class="text-white">Register</router-link>
      <router-link to="/profile" class="text-white">Profile</router-link>
      <div class="flex items-center">
        <ToggleSwitchMode />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleSwitchMode from './ToggleSwitchMode.vue'
export default {
  components: {
    ToggleSwitchMode,
  },
}
</script>
