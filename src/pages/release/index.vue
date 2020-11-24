<template>
  <Layout :showBack="true" pageTitle="Nomie Release Notes">
    <SectionHeader sectionTitle="Release Notes" sectionLink="/release" />
    <div class="contain my-3">
      <nuxt-link
        :to="`/release/${release.slug}`"
        class="block hover:bg-gray-100 p-3 hover:text-blue-600"
        v-for="release in releases"
        :key="release.slug"
      >
        <h2 class="font-bold text-xl">Nomie v{{release.title}}</h2>
        <p class="text-gray-600">{{release.description}}</p>
        <p class="text-xs text-gray-500 font-normal text-base">{{displayDate(release.createdAt)}}</p>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import SectionHeader from '@/components/section-header/section-header'
import dayjs from 'dayjs'
export default {
  components: {
    SectionHeader,
  },
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