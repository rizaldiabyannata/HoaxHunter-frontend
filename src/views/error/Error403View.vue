<template>
  <BaseErrorView errorCode="403" errorMessage="Forbidden" />
</template>

<script>
import BaseErrorView from './BaseErrorView.vue'

export default {
  name: 'Error403View',
  components: {
    BaseErrorView,
  },
}
</script>
