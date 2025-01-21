<template>
  <div class="flex flex-col h-screen w-screen bg-honeydew">
    <NavBar />
    <div class="flex flex-row dark:bg-zinc-900 h-full w-full">
      <form
        @submit.prevent="handleLogin"
        class="flex flex-col items-center justify-center w-1/3 space-y-4 h-full px-6 bg-oxford_blue"
      >
        <InputComp v-model="email" class="dark:text-white" placeholder="Email" type="email" />
        <InputComp
          v-model="password"
          class="dark:text-white"
          placeholder="Password"
          type="password"
        />
        <div class="flex flex-row justify-start w-full">
          <ButtonComp type="submit" buttonText="Login" />
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { Input as InputComp } from '@/components/ui/input'
import ButtonComp from '@/components/ButtonComp.vue'
import { useAuthStore } from '@/stores/auth'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'LoginView',
  components: {
    InputComp,
    ButtonComp,
    NavBar,
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },

  methods: {
    async handleLogin() {
      const authStore = useAuthStore()
      try {
        await authStore.login({ email: this.email, password: this.password })
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.error || 'Unknown error')
      }
    },
  },
}
</script>
