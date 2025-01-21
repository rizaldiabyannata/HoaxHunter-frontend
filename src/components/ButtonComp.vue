<template>
  <button :class="buttonClasses">
    <a
      :class="[
        'relative inline-block text-sm font-medium group active:text-orange-500 focus:outline-none focus:ring',
        textColor,
      ]"
    >
      <span
        :class="[
          'absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0',
          shadowColor,
        ]"
      ></span>

      <span :class="['relative block border border-current', paddingClasses, bgColor]">
        <router-link v-if="useRouterLink" :to="linkPath">{{ buttonText }}</router-link>
        <span v-else>{{ buttonText }}</span>
      </span>
    </a>
  </button>
</template>

<script>
export default {
  props: {
    useRouterLink: {
      type: Boolean,
      default: false,
    },
    linkPath: {
      type: String,
      default: '/',
    },
    buttonText: {
      type: String,
      default: 'Go Home',
    },
    color: {
      type: String,
      default: 'blue',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    buttonClasses() {
      return {
        'mt-5': true,
        'text-sm': this.size === 'sm',
        'text-base': this.size === 'md',
        'text-lg': this.size === 'lg',
      }
    },
    textColor() {
      return {
        'text-[#1A2238]': this.color === 'orange',
        'text-[#FF6A3D]': this.color === 'blue',
        'text-[#4CAF50]': this.color === 'green',
      }
    },
    bgColor() {
      return {
        'bg-[#FF6A3D]': this.color === 'orange',
        'bg-[#1A2238]': this.color === 'blue',
        'bg-[#4CAF50]': this.color === 'green',
      }
    },
    shadowColor() {
      return {
        'bg-[#1A2238]': this.color === 'orange',
        'bg-[#FF6A3D]': this.color === 'blue',
        'bg-[#4CAF50]': this.color === 'green',
      }
    },
    paddingClasses() {
      return {
        'px-4 py-2': this.size === 'sm',
        'px-8 py-3': this.size === 'md',
        'px-12 py-4': this.size === 'lg',
      }
    },
  },
}
</script>
