<template>
  <Layout :showBack="true">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1 class="text-3xl md:text-5xl px-5 md:px-5 mb-6 leading-auto font-bold">Nomie FAQ Archive</h1>

      <nuxt-link
        :to="`/faq/${faq.slug}`"
        class="block hover:bg-gray-100 p-2 px-5"
        v-for="faq in faqs"
        :key="faq.slug"
      >
        <h2 class="font-bold text-xl">{{faq.title}}</h2>
        <div class="flex items-center">
          <div
            v-if="faq.obsolete"
            class="bg-red-200 text-red-600 rounded-full px-4 py-1 text-xs mr-3"
          >Outdated</div>
          <p class="text-gray-600">
            <span
              class="text-gray-500 font-normal text-base"
              v-if="faq.version"
            >Version: {{(faq.version)}}</span>
            <span class="text-gray-500 font-normal text-base" v-else>All Versions</span>
          </p>
        </div>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let faqs = await $content('faqs')
      .sortBy('version', 'desc')
      .only(['slug', 'title', 'version', 'obsolete'])
      .fetch()
    return {
      faqs,
    }
  },
  methods: {
    displayDate(date) {
      return dayjs(date).format('DD MMM YYYY')
    },
  },
}
</script>

<style>
</style>