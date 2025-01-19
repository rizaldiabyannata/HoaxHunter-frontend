<template>
  <BaseErrorView errorCode="404" errorMessage="Page Not Found" />
</template>

<script>
import BaseErrorView from './BaseErrorView.vue'

export default {
  name: 'Error404View',
  components: {
    BaseErrorView,
  },
}
</script>
