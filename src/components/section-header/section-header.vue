<template>
  <div class="section-header--wrap">
    <div class="section-header contain px-3 md:px-0">
      <nuxt-link to="/" class="block hide-no-scroll">
        <img src="/images/nomie-color.svg" style="min-width:32px;" class="mr-2" />
      </nuxt-link>
      <i class="zmdi zmdi-chevron-right text-3xl text-gray-400 mr-2 hide-no-scroll"></i>
      <h1 class="leading-4 md:text-xl hover:bg-blue-100 p-2 mr-1">
        <nuxt-link :to="sectionLink" class="leading-4">{{sectionTitle}}</nuxt-link>
      </h1>
      <i v-if="pageTitle" class="zmdi zmdi-chevron-right text-3xl text-gray-400 mr-2"></i>
      <h2 v-if="pageTitle" class="truncate text-gray-600">{{pageTitle}}</h2>
      <div class="spacer"></div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      default() {
        return 'Section'
      },
    },
    sectionLink: {
      type: String,
      default() {
        return '/'
      },
    },
    pageTitle: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style>
.layout--app.scrolled .section-header--wrap {
  @apply z-40;
  @apply border-gray-400;
  border-bottom-width: 1px;
  transform: border 0.2s ease-in-out;
  background-color: gba(250, 250, 250, 0.9);
  backdrop-filter: saturate(180%) blur(4px);
}

h2.title {
  @apply text-gray-500;
  @apply truncate;
}

.section-header--wrap {
  @apply sticky;
  @apply top-0;
  background-color: rgba(255, 255, 255, 0.8);
}
.section-header--wrap h1 {
  @apply font-semibold;
}
.section-header--wrap .section-header {
  @apply flex;
  @apply items-center;
  @apply mx-auto;
  @apply border-gray-300;

  border-bottom-width: 1px;
  height: 60px;
}
.section-header--wrap.scrolled .section-header {
  border-bottom-color: transparent;
}
</style>