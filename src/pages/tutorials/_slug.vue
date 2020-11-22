<template>
  <Layout :showBack="true" :title="tutorial.title" :pageTitle="tutorial.title">
    <div class="contain my-3 pt-3 md:pt-6 md:my-6">
      <h1
        class="text-2xl md:text-4xl px-5 md:px-2 mb-2 md:mb-5 leading-auto font-bold text-center"
      >{{tutorial.title}}</h1>

      <div class="content md:rounded-lg text-lg px-5 md:p-10 text-gray-800">
        <nuxt-content :document="tutorial"></nuxt-content>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {
    let tutorial = await $content('tutorials', params.slug).fetch()
    return {
      tutorial,
    }
  },
  methods: {
    dayjs(date) {
      return dayjs(date)
    },
  },
  head() {
    return {
      title: this.tutorial.title,
    }
  },
}
</script>

<style scope>
.content img {
  margin: 30px 0;
}
</style>