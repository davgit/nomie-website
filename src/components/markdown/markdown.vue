<template>
  <div v-if="content && typeof content == 'string'" class="markdown" v-html="$md.render(content)"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default() {
        return undefined
      },
    },
  },
  mounted() {
    if (process.client) {
      window.$md = this.$md
    }
  },
}
</script>

<style>
.markdown {
  @apply py-6;
  @apply px-5;
  @apply pt-3;

  overflow-x: hidden;
}

.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  font-weight: bold;
}

.markdown h1 {
  font-size: 150%;
}

.markdown img {
  @apply shadow-2xl;
  @apply my-6;
  @apply overflow-hidden;
  @apply mx-auto;
  @apply rounded-lg;
}

.markdown a {
  color: var(--color-primary);
  border-bottom: dotted 1px var(--color-primary);
}
.markdown h2 {
  font-size: 130%;
}

.markdown h3 {
  font-size: 110%;
}

.markdown h4 {
  font-size: 100%;
}

.markdown h5 {
  font-size: 95%;
}

.markdown h6 {
  font-size: 90%;
}

.markdown code {
  @apply text-sm;
  @apply bg-blue-100;
  @apply text-blue-900;
}

.markdown pre {
  display: block;
  overflow-x: scroll;
  @apply bg-blue-900;
  @apply text-gray-200;
  @apply rounded-lg;
  @apply p-3;
  @apply my-5;
}

.markdown pre code {
  @apply bg-blue-900;
  @apply text-gray-200;
}

.markdown ol,
ul {
  @apply text-sm;
  @apply p-3;
  @apply bg-gray-200;
  @apply rounded-lg;
  @apply my-3;
}

.markdown ul {
  list-style: disc;
  @apply pl-4;
}

.markdown p,
.markdown ul {
  @apply my-5;

  color: var(--text-solid-800);
  font-size: 95%;
}

.markdown li {
  @apply py-1;
  @apply ml-3;
}

.markdown hr {
  @apply my-5;
}

.markdown ol {
  list-style: decimal;
  @apply pl-4;
}
</style>