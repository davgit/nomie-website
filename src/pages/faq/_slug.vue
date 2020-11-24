<template>
  <Layout :showBack="true" :title="`${faq.title}`">
    <SectionHeader sectionTitle="FAQ" sectionLink="/faq" :pageTitle="faq.title" />
    <div class="contain mx-auto p-5 md:px-2">
      <h1 class="text-3xl md:text-4xl leading-auto font-bold mb-4 flex items-center">{{faq.title}}</h1>
      <div
        v-if="faq.obsolete"
        class="bg-red-200 inline-flex py-1 text-red-600 ml-5 rounded-full px-4 py-0 text-xs mr-3 flex-grow-0 flex-shrink-0"
      >{{faq.version ? `v${faq.version}` : 'Version'}} is Outdated</div>
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