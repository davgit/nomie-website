<template>
  <Layout :showBack="true" pageTitle="Nomie Library" :collapseTitle="true">
    <div class="container mx-auto page-title" slot="pageTitle">
      <h1>Nomie Library</h1>
      <p>Looking for things to track?</p>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout.vue'
import dayjs from 'dayjs'
export default {
  async asyncData({ $content, params }) {},
  head() {
    return {
      title: 'Nomie Release Notes',
    }
  },
  methods: {},
}
</script>

<style>
</style>