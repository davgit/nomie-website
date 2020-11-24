<template>
  <div class="screenshot loaded" v-if="show">
    <slot />
  </div>
  <div class="screenshot loading" v-else></div>
</template>

<script>
const ratio = 0.54
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 120)
  },
}
</script>

<style>
</style>