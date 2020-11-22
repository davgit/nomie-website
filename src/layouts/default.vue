<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import Device from '@/modules/device/device'

export default {
  async mounted() {
    let latest = await this.$content('releases')
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()
    if (latest) {
      this.$store.commit('latest/release', latest[0])
    }
  },
}
</script>

<style>
body {
  --color-primary: #319ed7;
}

/* * {
  border: solid 1px red !important;
} */

.contain {
  @apply mx-auto;

  max-width: 900px;
  height: auto;
  max-height: auto;
}

.content p {
  @apply font-light;
  color: var(--text-solid-800);
  font-size: 95%;
}

.page-title {
  @apply px-4;
}
.page-title h1 {
  @apply text-3xl;
  @apply font-bold;
  @apply leading-10;
}
.page-title p {
  @apply text-sm;
  @apply text-gray-500;
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

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  margin-top: 24px;
  margin-bottom: 6px;
  font-weight: bold;
  line-height: 125%;
}

.content iframe {
  @apply mx-auto;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply shadow-md;
  @apply my-6;
  @apply w-full;
}

.content img {
  @apply mx-auto;
  @apply my-10;
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

.content hr {
  @apply my-6;
}

.content {
  @apply py-6;
  @apply px-5;
  @apply pt-3;
  overflow-x: hidden;
}
.content a {
  @apply text-blue-600;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  font-weight: bold;
}

.content h1 {
  font-size: 150%;
}

.content p {
  @apply mb-2;
}

.content img {
  @apply shadow-2xl;
  @apply my-6;
  @apply overflow-hidden;
  @apply mx-auto;
  @apply rounded-lg;

  max-height: 60vh;
}

.content a {
  color: var(--color-primary);
  border-bottom: dotted 1px var(--color-primary);
}
.content h2 {
  font-size: 130%;
}

.content h3 {
  font-size: 110%;
}

.content h4 {
  font-size: 100%;
}

.content h5 {
  font-size: 95%;
}

.content h6 {
  font-size: 90%;
}

.content code {
  @apply text-sm;
  @apply bg-blue-100;
  @apply text-blue-900;
}

.content pre {
  display: block;
  overflow-x: scroll;
  @apply bg-blue-900;
  @apply text-gray-200;
  @apply rounded-lg;
  @apply p-3;
  @apply my-5;
}
.content bold,
.content strong {
  @apply font-semibold;
}

.content pre code {
  @apply bg-blue-900;
  @apply text-gray-200;
}

.content ol,
ul {
  @apply p-3;
}

.content ul {
  list-style: disc;
  @apply pl-4;
}

.content li {
  @apply py-1;
  @apply ml-3;
}

.content hr {
  @apply my-5;
}

.content ol {
  list-style: decimal;
  @apply pl-4;
}
</style>
