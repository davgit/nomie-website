<template>
  <div class="p-5 text-center text-gray-300">Redirecting...</div>
</template>

<script>
export default {
  watch: {
    '$store.state.latest.release': {
      handler(release) {
        if (release && release.version) {
          this.$router.push(`/release/${release.version}`)
        }
      },
      immediate: true,
    },
  },
}
</script>

<style>
</style>