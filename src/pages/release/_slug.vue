<template>
  <Layout :showBack="true" :title="`Nomie Release v${release.title}`">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1 class="text-4xl px-5 md:px-2 leading-auto font-bold text-center">Nomie {{release.title}}</h1>
      <p class="opacity-50 text-center mb-6">{{dayjs(release.date).format('ddd DD MMM YYYY')}}</p>
      <div class="content md:rounded-lg text-xl p-5 md:p-10 text-gray-800 bg-gray-100 shadow-md">
        <nuxt-content :document="release"></nuxt-content>
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