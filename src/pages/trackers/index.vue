<template>
  <Layout :showBack="true" pageTitle="Nomie Community Tracker Library">
    <SectionHeader sectionTitle="Tracker Library" sectionLink="/trackers"></SectionHeader>
    <div class="contain mt-5 text-sm text-gray-600 text-center">
      Welcome to Nomie's Community Tracker library.
      <nuxt-link
        to="/tutorials/submit-a-tracker"
        class="underline text-blue-500"
      >Contribute a Tracker</nuxt-link>
    </div>
    <div class="contain my-3 flex flex-wrap justify-center">
      <nuxt-link
        :to="`/trackers/${tracker.slug}`"
        class="tracker-card w-full md:w-5/12"
        v-for="tracker in trackers"
        :key="tracker.tracker.tag"
      >
        <ClassicButton :emoji="tracker.tracker.emoji" />

        <main class="w-full ml-4">
          <h2 class="text-black font-bold text-lg">{{tracker.tracker.label}}</h2>
          <p class="text-gray-600">{{description(tracker)}}</p>
        </main>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import ClassicButton from '@/components/classic-button/classic-button.vue'
import { getTypeDetails } from '@/modules/app/tracker-type'
import dayjs from 'dayjs'

export default {
  components: {
    ClassicButton,
  },
  async asyncData({ $content, params }) {
    let trackers = await $content('trackers').sortBy('label', 'asc').fetch()
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
.tracker-card {
  @apply flex;
  @apply items-center;
  @apply shadow-md;
  @apply m-4;
  @apply p-4;
  @apply rounded-2xl;
  @apply bg-gray-200;
  transition: all 0.2s ease-in-out;
}
.tracker-card:hover {
  @apply bg-blue-500;
  @apply text-white;
}
.tracker-card:hover h2,
.tracker-card:hover p {
  @apply text-white;
}
.tracker-card .classic-button label {
  display: none;
}
</style>