<template>
  <Layout :showBack="true" pageTitle="Tutorials">
    <SectionHeader
      sectionTitle="Tutorials"
      pageTitle="Setup your Nomie game"
      sectionLink="/tutorials"
    />
    <div class="contain my-3 pt-3">
      <nuxt-link
        :to="`/tutorials/${tutorial.slug}`"
        class="block hover:bg-gray-100 py-2 px-5 flex items-center"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <div class="flex-grow-0 flex-shrink-0 text-5xl mr-5">{{tutorial.emoji || '⚪️'}}</div>
        <main>
          <h2
            class="font-bold text-xl text-blue-500 hover:text-blue-600 leading-6 mb-1"
          >{{tutorial.title}}</h2>
          <p class="text-gray-600 leading-auto mb-1">{{tutorial.description}}</p>
          <p class="text-gray-500 text-xs">
            <span
              class="text-gray-500"
              v-if="tutorial && tutorial.version"
            >{{tutorial.version ? `v${tutorial.version} • ` : ''}}</span>
            By {{tutorial.author}}
          </p>
        </main>
      </nuxt-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import SectionHeader from '@/components/section-header/section-header'
import dayjs from 'dayjs'
export default {
  components: {
    SectionHeader,
  },
  async asyncData({ $content, params }) {
    let tutorials = await $content('tutorials')
      .where({ published: { $ne: false } })
      .sortBy('createdAt', 'desc')
      .only([
        'slug',
        'title',
        'author',
        'version',
        'createdAt',
        'description',
        'emoji',
      ])
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