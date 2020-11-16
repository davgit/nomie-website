<template>
  <button class="classic-button">
    <div class="button-wrapper">
      <i class="emoji">{{emoji}}</i>
    </div>
    <label>{{label}}</label>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return null
      },
    },
    emoji: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style scoped>
.classic-button {
  --size: 120px;
  width: var(--size);
}
.classic-button .button-wrapper {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply shadow-lg;
  @apply border;
  @apply border-gray-200;
  
  border-radius: calc(var(--size) * 0.32);
  width: var(--size);
  height: var(--size);
}
.classic-button .emoji {
  font-style: normal;
  font-size:calc(var(--size) * 0.6);
}
.classic-button label {
  @apply mt-1;
  @apply block;
  @apply text-gray-600;
  font-size:calc(var(--size) * 0.17);
}
</style>