<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Device from '@/modules/device/device'
declare module 'vue/types/vue' {
  interface Vue {
    $Device: Device
  }
}

export default {}
</script>

<style>
.contain {
  @apply mx-auto;

  max-width: 900px;
  height: auto;
  max-height: auto;
}

.content p {
  @apply font-light;
}

button {
  transition: all 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.leading-auto {
  line-height: 120%;
}

.spacer {
  @apply flex-grow;
  @apply flex-shrink;
}

.content p,
.content ul,
.content ol {
  margin-bottom: 20px;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  margin-bottom: 20px;
  font-weight: bold;
}

.content iframe {
  @apply mx-auto;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply shadow-md;
  @apply my-6;
}

.content img {
  @apply mx-auto;
  @apply my-6;
  @apply rounded-xl;
  @apply overflow-hidden;
  @apply shadow-lg;

  display: block;
}

button:active,
button:focus,
a:active,
a:focus {
  outline: solid 4px rgba(255, 102, 0, 0.329);
}

.content h1 {
  font-size: 150%;
}
.content h2 {
  font-size: 140%;
}
.content h3 {
  font-size: 130%;
}
.content h4 {
  font-size: 120%;
}
.content h5 {
  font-size: 110%;
}
.content a {
  @apply text-blue-600;
}

.content hr {
  @apply my-6;
}
</style>
