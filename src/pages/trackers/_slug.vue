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
          Install {{tracker.label}}
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
          <li v-if="tracker.type !== 'picker'">
            <strong>Math</strong>
            <span>{{tracker.math}}</span>
          </li>
          <li v-if="tracker.uom !== 'num' && tracker.type !== 'picker'">
            <strong>UOM</strong>
            <span>{{tracker.uom}}</span>
          </li>
          <li v-if="tracker.default && tracker.type !== 'picker'">
            <strong>Default</strong>
            <span>{{tracker.default}}</span>
          </li>
          <li v-if="tracker.one_tap && tracker.type !== 'picker'">
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
          <li class="picker-list overflow-hidden" v-if="tracker.type == 'picker'">
            <strong>Items</strong>
            <span>
              <div
                class="item-wrap text-sm truncate"
                v-for="(item,index) in tracker.picks"
                :key="index"
              >
                <div
                  class="font-semibold mt-2 mb-1 text-lg"
                  v-if="item.trim().substr(item.length - 1)===':'"
                >{{item.trim().replace(':','')}}</div>
                <div v-else class="py-1">
                  <h3 class="truncate">{{item}}</h3>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div
      :class="`install-instructions ${$store.state.downloadTracker ? '_visible' : '_hidden'}`"
      @click.stop="$store.commit('download/tracker', false)"
    >
      <div
        :class="`install-window ${$store.state.downloadTracker ? '_visible' : '_hidden'}`"
        @click.stop="()=>{}"
      >
        <button class="closeButton" @click="$store.commit('download/tracker', false)">
          <i class="zmdi zmdi-close" />
        </button>
        <h1 class="text-center">
          Add
          <strong>
            <span class="mx-1">{{tracker.emoji}}</span>
            {{tracker.label}}
          </strong> to Nomie
        </h1>
        <ol class="my-3 text-sm text-gray-200 list-decimal ml-5">
          <li>Download this Tracker</li>
          <li>Open Nomie, tap Add Tracker</li>
          <li>Tap 'Import from File'</li>
          <li>Select downloaded tracker file.</li>
        </ol>
        <div class="bg-gray-900">
          <img
            src="https://shareking.s3.amazonaws.com/RPReplay_Final1606152856-1606153143.gif"
            class="rounded-lg overflow-hidden mx-auto block my-3"
            style="height:200px;"
          />
        </div>
        <div class="flex items-center">
          <button class="py-2 px-3 text-white w-full text-gray-600" @click="closeDownload">Cancel</button>
          <button
            @click="doDownload"
            class="bg-green-600 rounded-full w-full my-5 text-white py-2 px-3"
          >
            <i class="zmdi zmdi-download" />
            Download
          </button>
        </div>
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
      console.log('Downloads')
      this.$store.commit('download/tracker', this.tracker)
    },
    closeDownload() {
      this.$store.commit('download/tracker', null)
    },
    async doDownload() {
      const nomieTrackerPayload = {
        type: 'tracker',
        tracker: this.tracker,
      }
      await downloader(nomieTrackerPayload, `${this.tracker.tag}-nomie.json`)
      this.closeDownload()
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
  width: 100px;
  border-right: solid 1px rgba(0, 0, 0, 0.1);
}
.details .item-wrap {
  @apply truncate;
}
</style>