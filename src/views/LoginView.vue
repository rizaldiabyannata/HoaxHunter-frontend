<template>
  <div class="flex flex-col h-screen w-screen">
    <!-- <NavBar></NavBar> -->
    <div class="flex flex-row dark:bg-zinc-900 h-full w-full">
      <form
        @submit.prevent="handleLogin"
        class="flex flex-col items-center justify-center w-1/3 space-y-4 h-full px-6 bg-slate-500"
      >
        <InputComp v-model="email" class="dark:text-white" placeholder="Email" type="email" />
        <InputComp
          v-model="password"
          class="dark:text-white"
          placeholder="Password"
          type="password"
        />
        <div class="flex flex-row justify-start w-full">
          <ButtonComp type="submit">Login</ButtonComp>
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { Input as InputComp } from '@/components/ui/input'
import { Button as ButtonComp } from '@/components/ui/button'
// import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'LoginView',
  components: {
    InputComp,
    ButtonComp,
    // NavBar,
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // Menyimpan pesan error jika login gagal
    }
  },

  methods: {
    async handleLogin() {
      const authStore = useAuthStore() // Ambil instance store
      try {
        console.log(this.email, this.password) // Debugging untuk melihat input
        await authStore.login({ email: this.email, password: this.password }) // Panggil metode login dari store
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.error || 'Unknown error')
      }
    },
  },
}
</script>
