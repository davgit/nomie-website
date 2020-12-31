<template>
  <Layout :showBack="true" pageTitle="Nomie Release Notes">
    <SectionHeader sectionTitle="🎉  Release Notes" sectionLink="/release" />
    <div class="contain my-3">
      <nuxt-link
        :to="`/release/${release.slug}`"
        class="block hover:bg-gray-100 p-3 px-4 active:bg-blue-200"
        v-for="release in releases"
        :key="release.slug"
      >
        <h2 class="font-bold text-xl">Nomie v{{release.title}}</h2>
        <p class="text-gray-600 leading-6">{{release.description}}</p>
        <p class="text-xs text-gray-500 font-normal text-base flex mt-1 items-center">
          <span
            class="text-white bg-gray-500 px-3 py-1 rounded-full mr-2 inline-block text-xs"
          >{{fromNow(release.createdAt)}}</span>
          <span class="leading-6">{{displayDate(release.createdAt)}}</span>
        </p>
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
    fromNow(date) {
      return dayjs(date).fromNow()
    },
  },
}
</script>

<style>
</style>