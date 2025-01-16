<template>
  <div class="flex flex-row justify-between items-center bg-zinc-500 p-4">
    <div class="flex items-center space-x-4">
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/login" class="text-white">Login</router-link>
    </div>
    <div class="flex items-center space-x-4">
      <router-link to="/register" class="text-white">Register</router-link>
      <router-link to="/profile" class="text-white">Profile</router-link>
    </div>
    <div class="flex items-center">
      <ToggleSwitchMode />
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
