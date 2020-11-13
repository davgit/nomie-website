<template>
  <Layout :showBack="true" :title="`Nomie Release v${release.title}`">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div class="flex flex-row items-center mb-6 pr-4">
        <h1
          class="text-3xl md:text-4xl px-5 md:px-2 leading-auto font-bold text-center"
        >Nomie {{release.title}}</h1>
        <div class="spacer" />
        <p class="opacity-50 text-center">{{dayjs(release.createdAt).format('ddd DD MMM YYYY')}}</p>
      </div>
      <div
        class="content-wrapper md:rounded-lg text-lg text-gray-800 bg-gray-100 shadow-md md:p-10"
      >
        <div class="content p-2 md:p-6">
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
    let release = await $content('releases', params.slug).fetch()
    return {
      release,
    }
  },
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