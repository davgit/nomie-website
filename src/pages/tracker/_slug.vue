<template>
  <Layout
    :showBack="true"
    :title="`${tracker.emoji} ${tracker.label} tracking in Nomie`"
    :pageTitle="`${tracker.emoji} ${tracker.label}`"
  >
    <div slot="pageTitle" class="page-title flex items-center">
      <classic-button :label="tracker.label" :emoji="tracker.emoji" class="mr-4" />
      <div v-if="payload">
        <div class="text-gray-600 text-md">{{payload.description}}</div>
        <button
          @click="download"
          class="bg-green-600 rounded-full my-5 text-sm text-white flex-shrink-0 flex-grow-0 py-1 px-3"
        >
          <i class="zmdi zmdi-download" />
          Download {{tracker.label}}
        </button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
import { Tracker } from '@/modules/app/tracker'
import downloader from '@/modules/downloader/downloader'
import ClassicButton from '@/components/classic-button/classic-button.vue'

export default {
  components: {
    ClassicButton,
  },
  async asyncData({ $content, params }) {
    const payload = await $content('trackers', params.slug).fetch()
    const tracker = new Tracker(payload.tracker)
    console.log({ payload })
    return {
      tracker,
      payload,
    }
  },
  methods: {
    download() {
      const nomieTrackerPayload = {
        type: 'tracker',
        tracker: this.tracker,
      }
      downloader(nomieTrackerPayload, `${this.tracker.tag}-nomie.json`)
    },
    dayjs(date) {
      return dayjs(date)
    },
  },
  head() {
    return {
      title: this.tracker.label,
    }
  },
}
</script>

<style scope>
.content img {
  margin: 30px 0;
}
</style>