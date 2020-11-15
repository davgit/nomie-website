<template>
  <Layout
    :showBack="true"
    :title="`Nomie Release v${release.title}`"
    :pageTitle="`Version ${release.title}`"
  >
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div slot="pageTitle" class="page-title">
        <div class="flex items-center mb-4">
          <main>
            <h1 class>Nomie {{release.title}}</h1>
            <p>Released: {{dayjs(release.createdAt).format('ddd DD MMM YYYY')}}</p>
          </main>
          <div class="spacer" />
          <aside class="flex items-center mb-5 contain mx-auto">
            <nuxt-link
              to="/release"
              title="View all Nomie Release Notes"
              class="text-gray-600 ml-5 hover:text-blue-600 md:ml-2 mr-3 text-sm"
            >All</nuxt-link>

            <nuxt-link
              v-if="latest.version !== release.version"
              :to="`/release/${latest.version}`"
              class="bg-red-100 hover:bg-red-200 text-red-600 rounded-full px-4 py-1 text-xs mr-3 inline-flex items-center"
            >
              Latest v{{latest.version}}
              <i class="zmdi zmdi-chevron-right ml-1" />
            </nuxt-link>

            <span
              v-else
              class="bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-xs mr-3 inline-flex items-center"
            >
              <i class="zmdi zmdi-thumb-up mr-1" />
              Latest
            </span>
          </aside>
        </div>
      </div>

      <div
        class="content-wrapper md:rounded-lg text-lg text-gray-800 bg-gray-100 shadow-md px-1 py-3 md:p-10"
      >
        <div class="content contain mx-auto">
          <nuxt-content :document="release"></nuxt-content>
        </div>
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