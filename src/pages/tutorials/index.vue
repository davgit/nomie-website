<template>
  <Layout :showBack="true" pageTitle="Nomie Tutorials">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <div slot="pageTitle" class="page-title mb-6">
        <h1>Nomie Tutorials</h1>
      </div>
      <nuxt-link
        :to="`/tutorials/${tutorial.slug}`"
        class="block hover:bg-gray-100 p-4 px-5"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <h2
          class="font-bold text-xl text-blue-500 hover:text-blue-600 leading-6 mb-1"
        >{{tutorial.title}}</h2>
        <p
          class="text-gray-500"
        >{{tutorial.version ? `v${tutorial.version}` : ''}} {{tutorial.description}}</p>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let tutorials = await $content('tutorials')
      .sortBy('createdAt', 'desc')
      .only(['slug', 'title', 'author', 'version', 'createdAt', 'description'])
      .fetch()
    return {
      tutorials,
    }
  },
  methods: {
    displayDate(date) {
      return dayjs(date).format('DD MMM YYYY')
    },
  },
}
</script>

<style>
</style>