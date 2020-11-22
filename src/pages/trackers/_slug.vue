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
    <div class="p-3 bg-gray-200">
      <div class="contain mx-auto">
        <ul class="details">
          <li>
            <strong>Tag</strong>
            <span>{{tracker.tag}}</span>
          </li>
          <li>
            <strong>Type</strong>
            <span>{{tracker.type}}</span>
          </li>
          <li>
            <strong>Math</strong>
            <span>{{tracker.math}}</span>
          </li>
          <li>
            <strong>UOM</strong>
            <span>{{tracker.uom}}</span>
          </li>
          <li v-if="tracker.default">
            <strong>Default</strong>
            <span>{{tracker.default}}</span>
          </li>
          <li v-if="tracker.one_tap">
            <strong>One Tap</strong>
            <span>{{tracker.one_tap}}</span>
          </li>
          <li v-if="tracker.includes && tracker.includes.length">
            <strong>Includes</strong>
            <span>{{tracker.include}}</span>
          </li>
          <li v-if="tracker.score">
            <strong>Score</strong>
            <span>{{tracker.score}}</span>
          </li>
          <li class="picker-list" v-if="tracker.type == 'picker'">
            <strong>Pick List</strong>
            <span>
              <div class="item-wrap text-sm" v-for="(item,index) in tracker.picks" :key="index">
                <div
                  class="font-semibold"
                  v-if="item.substr(item.length - 1)===':'"
                >{{item.replace(':','')}}</div>
                <div v-else class="py-1">{{item}}</div>
                <hr />
              </div>
            </span>
          </li>
        </ul>
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
.details {
  @apply p-0;
}
.details li {
  @apply flex;
  @apply items-start;
  @apply justify-start;
  @apply w-full;
  @apply leading-5;

  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
.details li strong,
.details li span {
  @apply block;
  @apply p-2;
}
.details li strong {
  @apply pr-3;
  @apply flex-shrink-0;
  @apply flex-grow-0;
  width: 120px;
  border-right: solid 1px rgba(0, 0, 0, 0.1);
}
</style>