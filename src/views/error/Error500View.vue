<template>
  <BaseErrorView errorCode="500" errorMessage="Internal Server Error" />
</template>

<script>
import BaseErrorView from './BaseErrorView.vue'

export default {
  name: 'Error500View',
  components: {
    BaseErrorView,
  },
}
</script>
