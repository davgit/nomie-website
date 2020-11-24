<template>
  <Layout :showBack="true" pageTitle="Nomie Tracker Library">
    <SectionHeader sectionTitle="Tracker Library" sectionLink="/trackers"></SectionHeader>
    <div class="contain my-3">
      <nuxt-link
        :to="`/trackers/${tracker.slug}`"
        class="block hover:bg-gray-100 p-2 px-5 flex items-center"
        v-for="tracker in trackers"
        :key="tracker.tracker.tag"
      >
        <span class="emoji text-5xl mr-3">{{tracker.tracker.emoji}}</span>
        <main class="w-full">
          <h2 class="font-bold text-xl text-blue-500 hover:text-blue-600 flex items-center">
            <span class="truncate ...">{{tracker.tracker.label}}</span>
            <span class="spacer md:hidden" />
            <span
              class="text-gray-500 bg-gray-200 py-1 px-3 text-xs rounded-full font-semibold ml-3"
            >{{displayType(tracker.tracker.type)}}</span>
          </h2>
          <p class="text-xs text-gray-500">{{description(tracker)}}</p>
        </main>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import { getTypeDetails } from '@/modules/app/tracker-type'
import dayjs from 'dayjs'

export default {
  async asyncData({ $content, params }) {
    let trackers = await $content('trackers').sortBy('tag', 'desc').fetch()
    return {
      trackers,
    }
  },
  computed: {},

  methods: {
    description(tkrPack) {
      const tkr = tkrPack.tracker
      if (tkrPack.description) {
        return tkrPack.description
      } else if (tkr.picks) {
        return tkr.picks.join(', ')
      }
    },
    displayType(type) {
      return getTypeDetails(type).label
    },
    displayDate(date) {
      return dayjs(date).format('DD MMM YYYY')
    },
  },
}
</script>

<style>
</style>