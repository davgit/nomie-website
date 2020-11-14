<template>
  <div class="layout--app">
    <header class="p-1">
      <div class="contain mx-auto px-4">
        <button
          class="text-3xl px-2 mr-3 text-gray-600"
          style="line-height:100%"
          @click="back()"
          v-if="showBack"
        >
          <i class="zmdi zmdi-arrow-back" />
        </button>
        <nuxt-link to="/" title="Nomie home - privacy life tracking">
          <img
            src="/images/nomie-wordmark.svg"
            alt="nomie wordmark"
            style="height:24px; margin-top:-6px;"
          />
        </nuxt-link>
        <div class="spacer" />
        <nuxt-link
          :title="`v${latest.release.version} is the latest version of Nomie`"
          v-if="latest && latest.release"
          :to="`/release/${latest.release.version}`"
          class="text-blue-600 mr-2"
        >v{{latest.release.version}}</nuxt-link>
        <ul>
          <li>
            <button
              v-if="!$store.state.showInstall"
              class="pill bg-blue-600 text-white px-6 py-2 rounded-full"
              @click="$store.dispatch('install/show', true)"
            >Install</button>
            <button
              v-if="$store.state.showInstall"
              class="pill bg-red-600 text-white px-6 py-2 rounded-full"
              @click="$store.dispatch('install/show', false)"
            >Done</button>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <div class="contain mx-auto flex flex-col md:flex-row">
        <div class="flex flex-col w-full md:w-4/12 text-center py-4">
          <img src="/images/nomie-color.svg" class="mx-auto my-3" width="120" alt="Nomie logo mark" />
          <h1 class="font-bold text-lg">Get to know yourself</h1>
          <p
            class="text-sm leading-4 mt-4 opacity-50"
          >Track your life activities, locations, feelings, people, and more - all just by tapping a button</p>
        </div>
        <div class="spacer" />
        <div class="w-full md:w-2/12 mt-6">
          <ul>
            <li>
              <nuxt-link to="/release">Releases</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tutorials">Tutorials</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-2/12 mt-6">
          <ul>
            <li>
              <a href="https://reddit.com/r/nomie">r/nomie</a>
            </li>
            <li>
              <a href="https://twitter.com/nomieapp">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/open-nomie/nomie">GitHub</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-2/12 mt-6">
          <ul>
            <li>
              <nuxt-link to="/contact" title="Contact Happy Data">Contact Me</nuxt-link>
            </li>
            <li>
              <a href="https://patreon.com/nomieapp">Patrons Only</a>
            </li>

            <li>
              <a href="#">&copy; 2020</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto"></div>
    </footer>
    <div class="last-footer p-3 text-xs text-gray-700 bg-gray-100">
      <div class="contain mx-auto flex items-center justify-center">
        <img src="/images/happy-data-logo.svg" width="100" class="mr-3" />
        11650 Olio Road, Suite 1000-118 Fishers, IN 46040 USA
      </div>
    </div>

    <div
      :class="`install-instructions ${$store.state.showInstall ? '_visible' : '_hidden'}`"
      @click.stop="$store.dispatch('install/show', false)"
    >
      <div
        :class="`install-window ${$store.state.showInstall ? '_visible' : '_hidden'}`"
        @click.stop="()=>{}"
      >
        <button class="closeButton" @click="$store.dispatch('install/show', false)">
          <i class="zmdi zmdi-close" />
        </button>
        <TabInstall />
      </div>
    </div>
  </div>
</template>

<script>
import TabInstall from '@/components/home/tab-install.vue'
export default {
  components: {
    TabInstall,
  },
  props: {
    showBack: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    latest() {
      return this.$store.state.latest
    },
  },
  methods: {
    back() {
      if (document.referrer.indexOf(window.location.host) !== -1) {
        this.$router.push('/')
      } else {
        this.$router.back()
      }
    },
  },
  data() {
    return {}
  },
  async mounted() {
    let latest = await this.$content('releases')
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()
    if (latest) {
      this.$store.commit('latest/release', latest[0])
    }
  },
}
</script>

<style scoped>
/* * {
  border: solid 1px red;
} */
main {
  @apply pb-6;
  min-height: 70vh;
}

.install-instructions {
  @apply fixed;
  @apply top-0;
  @apply left-0;
  @apply w-screen;
  @apply h-screen;
  @apply z-40;
  @apply flex;
  @apply items-center;
  @apply justify-center;

  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.closeButton {
  @apply rounded-full;
  @apply bg-black;
  @apply text-white;
  @apply text-xl;

  display: none;

  right: 50%;
  margin-right: -25px;
  position: absolute;
  bottom: -25px;
  width: 50px;
  height: 50px;
}

.install-instructions._visible {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 1;
}

.install-instructions .install-window {
  @apply bg-gray-800;
  @apply text-white;
  @apply pt-6;
  @apply px-5;
  @apply rounded-2xl;
  @apply shadow-2xl;
  @apply mx-2;
  transition: transform 0.2s ease-out;
  transform: translateY(200px) scale(0.9);
  max-width: 500px;
  min-width: 300px;
  min-height: 200px;
  cursor: auto;
}

.install-instructions .install-window._visible {
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

header {
  @apply sticky;
  @apply bg-white;
  @apply top-0;
  @apply mb-4;
  @apply shadow-lg;
  @apply z-50;
}
header .contain {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply h-auto;
}

footer {
  @apply py-6;
  @apply px-5;
  @apply text-gray-900;

  border-top: solid 1px rgba(0, 0, 0, 0.1);
}
footer ul li a {
  @apply px-1;
  @apply py-2;
  @apply block;
}
footer address {
}
footer ul li a:hover {
  @apply text-blue-600;
}
</style>