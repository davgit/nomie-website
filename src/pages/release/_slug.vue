<template>
  <Layout
    :showBack="true"
    :title="`Nomie Release v${release.title}`"
    :pageTitle="`Version ${release.title}`"
  >
    <SectionHeader
      sectionTitle="Release Notes"
      sectionLink="/release"
      :pageTitle="`v${release.version}`"
    >
      <nuxt-link
        v-if="latest.version !== release.version"
        :to="`/release/${latest.version}`"
        class="bg-red-100 hover:bg-red-200 text-red-600 rounded-full px-4 py-1 text-xs mr-3 inline-flex items-center"
      >
        Latest
        <i class="zmdi zmdi-chevron-right ml-1" />
      </nuxt-link>
      <span
        v-else
        class="bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-xs mr-3 inline-flex items-center"
      >
        <i class="zmdi zmdi-thumb-up mr-1" />
        Latest
      </span>
    </SectionHeader>

    <div class="contain bg-white flex">
      <div class="content md:w-9/12">
        <nuxt-content class="px-2 py-5" :document="release"></nuxt-content>
      </div>
      <div class="hidden md:block md:w-3/12 p-4 text-sm sticky top-0">
        <h4 class="font-semibold px-2 my-2">TOC</h4>
        <a
          class="toc-item block py-1 px-2 rounded-md hover:bg-gray-200 text-blue-600"
          :href="`#${item.id}`"
          v-for="(item,index) in release.toc"
          :key="index"
        >{{item.text}}</a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let latest = await $content('releases')
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()

    let release = await $content('releases', params.slug)
      .sortBy('createdAt')
      .fetch()
    return {
      release,
      latest: latest[0],
    }
  },
  computed: {},
  methods: {
    dayjs(date) {
      return dayjs(date)
    },
  },
  head() {
    return {
      title: `Nomie v${this.release.title} released ${dayjs(
        this.release.createdAt,
        'ddd MMM D YYYY'
      )}`,
    }
  },
}
</script>

<style scope>
</style>