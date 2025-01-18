<template>
  <NavBar />
  <div class="flex justify-center items-center">
    <h1 class="text-xl">Testing API Connection</h1>
  </div>
  <div v-for="hoax in hoaxes" :key="hoax.id">
    <div>{{ hoax.title }}</div>
    <div>{{ hoax.createdAt }}</div>
  </div>
</template>

<script>
import api from '@/service/api'
import NavBar from '@/components/ui/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
  },

  data() {
    return {
      hoaxes: [],
    }
  },
  mounted() {
    this.loadHoaxes()
  },
  methods: {
    async loadHoaxes() {
      try {
        const response = await api.get('hoaxes/all')
        this.hoaxes = response.data.articles
        console.log('Hoaxes:', this.hoaxes)
      } catch (error) {
        console.error('Error loading hoaxes:', error)
      }
    },
  },
}
</script>
