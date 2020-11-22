<template>
  <div class="layout--app" :class="{scrolled: scrolled}">
    <header class="p-1">
      <div class="contain mx-auto px-2 md:px-4 py-3">
        <button class="text-2xl text-gray-600" @click="back()" v-if="showBack">
          <i class="zmdi zmdi-arrow-back" />
        </button>
        <nuxt-link class="logo-wrap ml-3" to="/" title="Nomie home - privacy life tracking">
          <img
            src="/images/nomie-wordmark.svg"
            class="header-logo-words"
            alt="nomie wordmark"
            style="margin-top:-6px;"
          />
          <img
            src="/images/nomie-color.svg"
            alt="nomie logomark"
            style="height:24px;"
            class="header-logo-mark"
          />
        </nuxt-link>
        <div
          class="title text-gray-400 show-on-scroll ml-3 text-sm truncate ..."
          v-if="pageTitle"
        >{{pageTitle}}</div>
        <div class="spacer" />
        <nuxt-link
          title="Nomie tips and tricks"
          v-if="latest && latest.release"
          :to="`/tutorials`"
          class="nav-emoji mr-2 md:mr-3"
        >
          💡
          <span class="hidden md:inline-flex text-sm text-gray-700 ml-1 mr-2">Tutorials</span>
        </nuxt-link>
        <nuxt-link
          :title="`v${latest.release.version} is the latest version of Nomie`"
          v-if="latest && latest.release"
          :to="`/release/${latest.release.version}`"
          class="nav-emoji mr-3"
        >
          🎉
          <span class="hidden md:inline-flex text-sm text-gray-700 ml-1 mr-2">Latest</span>
        </nuxt-link>
        <button
          v-if="!$store.state.showInstall"
          class="pill bg-blue-600 text-white px-4 py-1 text-sm md:text-base md:px-6 md:py-2 rounded-full"
          @click="$store.dispatch('install/show', true)"
        >Install</button>
        <button
          v-if="$store.state.showInstall"
          class="pill bg-red-600 text-white px-4 py-1 text-sm md:text-base md:px-6 md:py-2 rounded-full"
          @click="$store.dispatch('install/show', false)"
        >Done</button>
      </div>
    </header>
    <div class="contain mx-auto py-4" v-if="$slots.hasOwnProperty('pageTitle')">
      <slot class="slot-page-title" name="pageTitle" />
    </div>
    <main id="main-content">
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
              <nuxt-link to="/trackers" title="Browse Nomie Trackers">
                Library
                <span class="badge xs">beta</span>
              </nuxt-link>
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
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto"></div>
    </footer>
    <div class="last-footer p-3 text-xs text-gray-700 bg-gray-100">
      <div class="contain mx-auto flex items-center justify-center">
        <img src="/images/happy-data-logo.svg" width="100" class="mr-3" />
        11650 Olio Road, Suite 1000-118 Fishers, IN 46040 USA.
        &copy; 2020
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
    pageTitle: {
      type: String,
      default() {
        return null
      },
    },
    showBack: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      scrolled: false,
    }
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
  async mounted() {
    const _scrolled = (evt) => {
      if (evt.top > 40 && !this.scrolled) {
        this.scrolled = true
      } else if (this.scrolled && evt.top <= 40) {
        this.scrolled = false
      }
    }
    if (process.client) {
      this.$Device.onScroll(_scrolled)
    }
  },
}
</script>

<style>
.show-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  pointer-events: none;
  transition: all 0.2s ease-in-out;
}
.scrolled .show-on-scroll {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
</style>

<style scoped>
/* * {
  border: solid 1px red;
} */
main#main-content {
  @apply pb-6;
  min-height: 70vh;
}
.nav-emoji {
  @apply px-2;
  @apply py-1;
  @apply rounded-full;
  @apply text-lg;
}

.logo-wrap {
  @apply relative;
  @apply h-auto;
  @apply w-auto;

  transition: transform 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  outline: none !important;
}
.logo-wrap:active {
  transform: scale(0.9);
}

.header-logo-words {
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  opacity: 1;
  min-width: 90px;
  max-width: 90px;
}
.header-logo-mark {
  opacity: 0;
}
.scrolled .header-logo-words {
  transition: all 0.2s ease-in-out;
  transform: translateX(-100px);
  opacity: 0;
}

.scrolled .header-logo-mark {
  opacity: 1;
}

.badge {
  @apply text-xs;
  @apply text-white;
  @apply bg-blue-600;
  @apply rounded-lg;
  @apply py-1;
  @apply px-2;
}

.nav-emoji.nuxt-link-active {
  @apply bg-gray-200;
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