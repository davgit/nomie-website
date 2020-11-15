<template>
  <Layout :showBack="true" pageTitle="Nomie Release Notes">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div slot="pageTitle" class="page-title">
        <h1 class="mb-5">Nomie Release Notes</h1>
      </div>

      <nuxt-link
        :to="`/release/${release.slug}`"
        class="block hover:bg-gray-100 p-3 px-5"
        v-for="release in releases"
        :key="release.slug"
      >
        <h2 class="font-bold text-xl">Nomie v{{release.title}}</h2>
        <p class="text-gray-600">
          <span class="text-gray-500 font-normal text-base">{{displayDate(release.createdAt)}}</span>
          {{release.description}}
        </p>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let releases = await $content('releases')
      .sortBy('createdAt', 'desc')
      .only(['slug', 'title', 'createdAt', 'description'])
      .fetch()
    return {
      releases,
    }
  },
  head() {
    return {
      title: 'Nomie Release Notes',
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