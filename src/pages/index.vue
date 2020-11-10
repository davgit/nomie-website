<template>
  <Layout>
    <Screenshots />

    <div class="container mx-auto mb-3 md:mb-5">
      <h1 class="website-title text-5xl lg:text-6xl">
        Track your life
        <span class="text-green-500">privately.</span>
      </h1>
    </div>

    <section class="container--tabs">
      <ul class="tabs">
        <li>
          <button
            class="md:text-2xl md:p-6 p-4"
            :class="{active:tab=='privacy'}"
            @click="tab='privacy'"
          >Privacy</button>
        </li>
        <li>
          <button
            class="md:text-2xl md:p-6 p-4"
            title="how to install nomie"
            :class="{active:tab=='install'}"
            @click="tab='install'"
          >Install</button>
        </li>
        <li>
          <button
            class="md:text-2xl md:p-6 p-4"
            :class="{active:tab=='price'}"
            @click="tab='price'"
          >Why Free</button>
        </li>
      </ul>
      <div class="tab-content">
        <main class="container mx-auto p-4 md:p-6 md:text-3xl">
          <TabPrivacy v-if="tab == 'privacy'" />
          <TabInstall v-else-if="tab == 'install'" />
          <TabFree v-else-if="tab == 'price'" />
        </main>
      </div>
      <div class="bg-gray-300">
        <div class="latest contain">
          <nuxt-link
            class="btn"
            title="What's new in the latest version of Nomie"
            :to="`/release/${latest.slug}`"
          >See what's new in v{{latest.title}}</nuxt-link>
          <br />
          <nuxt-link
            to="/release"
            class="mt-3 block text-sm text-blue-500 underline"
          >Previous Releases...</nuxt-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/layout/layout.vue'
import TabPrivacy from '@/components/home/tab-privacy.vue'
import TabInstall from '@/components/home/tab-install.vue'
import TabFree from '@/components/home/tab-free.vue'
import Screenshots from '@/components/image-scroller/image-scroller.vue'

function random(items: Array<string>): string {
  return items[Math.floor(Math.random() * (items.length - 1))]
}

export default Vue.extend({
  components: {
    Layout,
    TabPrivacy,
    TabInstall,
    TabFree,
    Screenshots,
  },
  async asyncData(as: any) {
    const { $content } = as
    let latest = await $content('releases')
      .limit(1)
      .sortBy('createdAt', 'desc')
      .only(['slug', 'title', 'description'])
      .fetch()
    if (latest && latest.length) {
      latest = latest[0]
    }
    return {
      latest,
    }
  },
  computed: {
    who() {
      return random(['😍', '😡', '🤯', '👨‍👩‍👧', '❤️', '👿', '👼🏽', '👮'])
    },
    what() {
      return random(['🍺', '🚬', '🎉', '🐶', '🐭', '🍄', '🌓'])
    },
    where() {
      return random(['🚘', '⛵️', '🛥', '🏖', '⛪️', '📥'])
    },
    when() {
      return random(['⏰', '🌤', '🛌', '🍱', '🏓', '🏈', '🎖'])
    },
  },
  data() {
    return {
      tab: 'privacy',
      size: undefined,
    }
  },
  mounted() {},
})
</script>

<style>
.website-title {
  @apply font-extrabold;
  @apply p-6;
  @apply mx-auto;
  @apply text-center;

  max-width: 8 00px;
  line-height: 100%;
}

.container--tabs {
}
.container--tabs .tabs {
  @apply flex;
  @apply items-center;
  @apply justify-center;
}
.container--tabs .tabs button {
  @apply block;
  @apply text-center;
  @apply leading-4;
  @apply text-gray-600;
  @apply font-medium;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.container--tabs .tabs button.active {
  @apply bg-gray-900;
  @apply text-gray-100;
}
.container--tabs .tab-content {
  @apply bg-gray-900;
  @apply text-gray-100;
  @apply p-5;
}
.latest {
  @apply px-4;
  @apply py-10;
  @apply text-center;
  @apply text-lg;
  @apply text-gray-900;
}
.latest .btn {
  @apply bg-white;
  @apply shadow-md;
  @apply text-blue-500;
  @apply font-semibold;
  @apply py-2;
  @apply px-4;
  @apply rounded-full;
}
</style>
