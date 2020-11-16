<template>
  <Layout :showBack="true" title="Import Tools">
    <div slot="pageTitle" class="page-title">
      <h1>Import Tools</h1>
      <p>Some local only tools to help get data into a Nomie Backup file</p>
    </div>

    <div class="px-3 contain mx-auto">
      <h1 class="text-xl font-bold mb-3">1. Select Export Platform</h1>
      <div class="tabs mb-4">
        <button
          :class="`importer tab ${importer == loopImporter ? 'active' : ''}`"
          v-for="loopImporter in importers"
          :key="loopImporter.key"
          @click="activeImporter(loopImporter)"
        >
          <img :src="loopImporter.avatar" width="16" />
          {{loopImporter.name}}
        </button>
      </div>
    </div>

    <div v-if="importer" class="contain mx-auto px-3 mb-6">
      <h1 class="text-xl font-bold mb-3">2. Select {{importer.name}} export file</h1>
      <input type="file" @input="fileAttached" />
    </div>

    <div v-if="fileContent && backup" class="contain mx-auto px-3">
      <h1 class="text-xl font-bold mb-1">3. Download {{importer.name}} as Nomie Backup File</h1>
      <p
        class="mb-3 text-gray-600"
      >{{Object.keys(backup.trackers).length}} Trackers & {{backup.events.length}} Logs.</p>
      <button
        class="bg-blue-500 ml-2 py-1 px-4 text-white rounded-full"
        @click="download()"
      >Download Backup</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/layout/layout.vue'
import TabPrivacy from '@/components/home/tab-privacy.vue'
import TabInstall from '@/components/home/tab-install.vue'
import TabFree from '@/components/home/tab-free.vue'
import Screenshots from '@/components/image-scroller/image-scroller.vue'
import Importers from './importers'
import downloader from '@/modules/downloader/downloader'

import JsFileDownloader from 'js-file-downloader'

interface ImporterData {
  fileContent: any
  backup: any
  importer: any
}

export default Vue.extend({
  components: {
    Layout,
  },
  data(): ImporterData {
    return {
      fileContent: undefined,
      backup: undefined,
      importer: undefined,
    }
  },
  computed: {
    importers(): Array<any> {
      const _importers: any = Importers
      return Object.keys(_importers).map((importKey: string) => {
        const importer = _importers[importKey]
        importer.key = importKey
        return importer
      })
    },
  },
  methods: {
    activeImporter(importer: any) {
      this.importer = importer
      this.fileContent = undefined
      this.backup = undefined
    },
    async download() {
      const fileName = `${
        this.importer.name
      }-nomie-${new Date().getTime()}.json`
      downloader(this.backup, fileName)
    },
    // importerClicked(importer: any) {
    //   this.importer = importer
    //   this.backup = importer.importer(this.csv)
    // },
    fileAttached(evt: any) {
      const files = evt.target.files // FileList object
      const reader = new FileReader()
      reader.onload = (fileContent: any) => {
        this.fileContent = reader.result
        if (this.importer) {
          this.backup = this.importer.importer(this.fileContent)
          console.log('backup', this.backup)
        }
      }
      reader.readAsText(files[0])
    },
  },
  head() {
    return {
      title: 'Contact Happy Data / Nomie',
    }
  },
})
</script>

<style>
.tabs {
  @apply flex;
  @apply items-center;
}
.tabs .tab {
  @apply py-1;
  @apply px-3;
  @apply rounded-lg;
  @apply flex;
  @apply items-center;
  @apply border;
  border-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: solid 1px #fff;
  margin-bottom: -1px;
}
.tabs .tab.active {
  @apply rounded-full;
  @apply bg-blue-600;
  @apply text-white;
}
.tabs .tab img {
  @apply shadow-md;
  @apply rounded-full;
  @apply mr-2;
}
</style>
