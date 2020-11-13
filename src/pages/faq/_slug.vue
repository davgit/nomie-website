<template>
  <Layout :showBack="true" :title="`${faq.title}`">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1 class="text-4xl md:text-4xl leading-auto font-bold pl-5 mb-4 flex items-center">
        <span class="text-gray-400 font-normal">{{faq.version ? `v${faq.version}` : ''}}</span>
        {{faq.title}}
        <div
          v-if="faq.obsolete"
          class="bg-red-200 text-red-600 rounded-full px-4 py-1 text-xs mr-3"
        >Outdated</div>
      </h1>
      <div class="content" style="min-height:50vh">
        <nuxt-content :document="faq"></nuxt-content>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let faq = await $content('faqs', `${params.slug}`).fetch()
    return {
      faq,
    }
  },
  methods: {
    dayjs(date) {
      return dayjs(date)
    },
  },
  head() {
    return {
      title: `${this.faq.title}`.substr(0, 60),
    }
  },
}
</script>

<style scope>
</style>