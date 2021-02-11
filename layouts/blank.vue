<template>
  <nuxt />
</template>

<script>
export default {
  data() {
    return {
      title: null
    }
  },
  head() {
    return {
      title: `${this.$t(this.title)} - Luma`
    }
  }
}
</script>
