<template>
  <div
    class="image-wrapper loaded"
    :style="`--self-height:${height}`"
    :data-content="label"
    v-if="show"
  >
    <slot />
  </div>
  <div
    class="image-wrapper loading"
    :style="`--self-height:${height}`"
    :data-content="label"
    v-else
  ></div>
</template>

<script>
const ratio = 0.54
export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    width() {
      return
    },
  },
  props: {
    height: {
      default() {
        return `60vh`
      },
    },
    label: {
      type: String,
      default() {
        return null
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 12)
  },
}
</script>

<style>
.image-wrapper {
  @apply relative;
  @apply flex-shrink-0;
  @apply flex-grow-0;

  outline: none !important;
  transition: all 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);

  @apply bg-gray-200;
  @apply rounded-2xl;
  @apply overflow-hidden;

  width: calc(var(--self-height) * 0.56);
  height: var(--self-height);
}

.image-wrapper img {
  width: calc(var(--self-height) * 0.56);
  height: var(--self-height);
}

.image-wrapper:active,
.image-wrapper:focus {
  transform: scale(0.9);
}

.image-wrapper:active::after,
.image-wrapper:focus::after {
  @apply shadow-lg;

  opacity: 1;
  transform: translateY(-100px);
}

.image-wrapper:active img,
.image-wrapper:focus img {
  filter: blur(6px);
}

.image-wrapper::after {
  @apply bg-blue-600;
  @apply text-white;
  @apply rounded-lg;
  @apply leading-5;
  @apply text-center;
  @apply absolute;
  @apply left-0;
  @apply right-0;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply px-4;
  @apply py-2;
  @apply mx-auto;
  @apply shadow-md;

  top: 60%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  content: attr(data-content);
  pointer-events: none;
}
</style>