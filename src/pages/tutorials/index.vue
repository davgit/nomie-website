<template>
  <Layout :showBack="true">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1
        class="text-3xl md:text-5xl px-5 md:px-5 mb-6 leading-auto font-bold text-center"
      >Nomie Tutorials</h1>

      <nuxt-link
        :to="`/tutorials/${tutorial.slug}`"
        class="block hover:bg-gray-100 p-2 px-5"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <h2
          class="font-bold text-xl text-blue-500 hover:text-blue-600"
        >{{tutorial.version ? `v${tutorial.version}` : ''}} {{tutorial.title}}</h2>
        <p>{{tutorial.description}}</p>
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