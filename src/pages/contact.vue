<template>
  <Layout :showBack="true">
    <div class="content md:rounded-lg text-xl p-5 text-gray-800">
      <p class="text-center text-sm opacity-60">
        Have something to share?
        <br />I love talking with Nomie users.
      </p>
      <p class="text-center">
        <span class="font-bold">Happy Data, LLC. dba Nomie</span>
        <br />11650 Olio Road, Suite 1000-118
        <br />Fishers, IN 46040 USA
        <br />
        <a href="mailto:support@happydata.org">support@happydata.org</a>
        <br />317-606-3862
      </p>
    </div>
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
  },

  head() {
    return {
      title: 'Contact Happy Data / Nomie',
    }
  },
})
</script>

<style>
</style>
