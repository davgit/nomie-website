<template>
  <Layout :showBack="true" pageTitle="Nomie Tracker Library">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div slot="pageTitle" class="page-title mb-6">
        <h1>Nomie Tracker Library</h1>
        <p>Looking for items to track? Hopefully this will become more plentiful in the future</p>
      </div>
      <nuxt-link
        :to="`/tracker/${tracker.slug}`"
        class="block hover:bg-gray-100 p-2 px-5 flex items-center"
        v-for="tracker in trackers"
        :key="tracker.tracker.tag"
      >
        <span class="emoji text-5xl mr-3">{{tracker.tracker.emoji}}</span>
        <main>
          <h2 class="font-bold text-xl text-blue-500 hover:text-blue-600 flex items-center">
            <span class="truncate ...">{{tracker.tracker.label}}</span>
            <span
              class="text-gray-500 bg-gray-200 py-1 px-3 text-xs rounded-full font-semibold ml-3"
            >{{tracker.tracker.type}}</span>
          </h2>
          <p
            class="text-xs text-gray-500"
          >{{tracker.description || tracker.tracker.picks.join(', ')}}</p>
        </main>
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