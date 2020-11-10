<template>
  <Layout>
    <div class="contain mx-auto mb-3 md:mb-5">
      <h1 class="website-title text-4xl lg:text-6xl">Nomie Sponsors</h1>
    </div>

    <div class="primary-content contain content px-5"></div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/layout/layout.vue'
import TabPrivacy from '@/components/home/tab-privacy.vue'
import TabInstall from '@/components/home/tab-install.vue'
import TabFree from '@/components/home/tab-free.vue'
import Screenshots from '@/components/image-scroller/image-scroller.vue'

export default Vue.extend({
  components: {
    Layout,
    TabPrivacy,
    TabInstall,
    TabFree,
    Screenshots,
  },
  data() {
    return {
      tab: 'privacy',
    }
  },
})
</script>

<style>
.website-title {
  @apply font-black;
  @apply p-6;

  line-height: 120%;
}

.container--tabs {
}
.container--tabs .tabs {
  @apply flex;
  @apply items-center;
  @apply justify-center;
}
.container--tabs .tabs button {
  @apply block;
  @apply text-center;
  @apply leading-4;
  @apply text-gray-600;
  @apply font-medium;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.container--tabs .tabs button.active {
  @apply bg-gray-900;
  @apply text-gray-100;
}
.container--tabs .tab-content {
  @apply bg-gray-900;
  @apply text-gray-100;
  @apply p-5;
}
</style>
