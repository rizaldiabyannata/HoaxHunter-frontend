<template>
  <BaseErrorView errorCode="401" errorMessage="Unauthorized" />
</template>

<script>
import BaseErrorView from './BaseErrorView.vue'

export default {
  name: 'Error401View',
  components: {
    BaseErrorView,
  },
}
</script>
