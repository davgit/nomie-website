<template>
  <Layout :showBack="true">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1 class="text-3xl md:text-5xl px-5 md:px-5 mb-6 leading-auto font-bold">Nomie Release Notes</h1>

      <nuxt-link
        :to="`/release/${release.slug}`"
        class="block hover:bg-gray-100 p-2 px-5"
        v-for="release in releases"
        :key="release.slug"
      >
        <h2 class="font-bold text-xl">
          Nomie v{{release.title}}
          <span
            class="opacity-50 font-normal text-base"
          >{{displayDate(release.createdAt)}}</span>
        </h2>
        <p>{{release.description}}</p>
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
  methods: {
    displayDate(date) {
      return dayjs(date).format('DD MMM YYYY')
    },
  },
}
</script>

<style>
</style>