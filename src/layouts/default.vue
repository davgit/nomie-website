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

.gap {
  height: 6px;
  width: 6px;
}
.gap-1 {
  height: 12px;
  width: 12px;
}
.gap-2 {
  height: 18px;
  width: 18px;
}
.gap-3 {
  height: 18px;
  width: 18px;
}
.gap-4 {
  height: 24px;
  width: 24px;
}
.gap-5 {
  height: 30px;
  width: 30px;
}

.content p {
  @apply text-base;
}

.page-title {
  @apply px-4;
}
.page-title h1 {
  @apply text-3xl;
  @apply font-bold;
  @apply leading-10;
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
  @apply mb-3;
  @apply font-bold;
  @apply leading-auto;
}

.hide-no-scroll {
  transition: all 0.2s ease-in-out;
  width: 0px;
  height: 0px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  transform: translateY(20px);
}
.scrolled .hide-no-scroll {
  transition: all 0.2s ease-in-out;
  display: inline-flex !important;
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
  height: auto;
  width: auto;
}

.content iframe {
  @apply mx-auto;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply shadow-md;
  @apply my-6;
  @apply w-full;
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
  overflow-x: hidden;
}
.content a,
.content-block a {
  @apply text-blue-500;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  @apply font-semibold;
}

.content h1 {
  font-size: 150%;
}

.content p {
  @apply mb-5;
  @apply leading-6;
  @apply text-gray-900;
}

.content img {
  @apply block;
  @apply mr-auto;
  @apply my-8;
  @apply overflow-hidden;
  @apply rounded-xl;
  @apply shadow-xl;
  @apply w-auto;
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
  @apply bg-gray-900;
}

.content pre {
  display: block;
  overflow-x: scroll;
  @apply bg-gray-900;
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
  @apply bg-gray-900;
}

.content-generic {
  @apply font-light;
  @apply leading-8;
}

.content-generic a {
  @apply text-blue-500;
  @apply underline;
}
.content-generic a:hover {
  background-color: rgba(0, 110, 255, 0.1);
}

.content ol,
.content ul {
  @apply p-3;

  @apply mb-4;
}

code {
  text-shadow: none;
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
