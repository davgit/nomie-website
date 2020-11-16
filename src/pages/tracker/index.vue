<template>
  <Layout :showBack="true" pageTitle="Nomie Tracker Library">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div slot="pageTitle" class="page-title mb-6">
        <h1>Nomie Tracker Library</h1>
      </div>
      <nuxt-link
        :to="`/tracker/${tracker.slug}`"
        class="block hover:bg-gray-100 p-4 px-5"
        v-for="tracker in trackers"
        :key="tracker.tracker.tag"
      >
        <h2
          class="font-bold text-xl text-blue-500 hover:text-blue-600"
        >{{tracker.tracker.emoji}} {{tracker.tracker.label}}</h2>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'

export default {
  async asyncData({ $content, params }) {
    let trackers = await $content('trackers').sortBy('tag', 'desc').fetch()
    console.log({ trackers })
    return {
      trackers,
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