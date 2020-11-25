<template>
  <div class="layout--app" :class="{scrolled: scrolled, mobile: mobile}">
    <header>
      <div class="contain mx-auto px-4 md:px-2 flex items-center header-container">
        <button class="bg-transparent menu-button" v-show="mobile" @click="toggleMenu()">
          <i :class="`zmdi ${showMenu ? 'zmdi-close' : 'zmdi-menu'}`"></i>
        </button>

        <nuxt-link to="/" title="Nomie home - privacy life tracking">
          <img
            src="/images/nomie-wordmark-white.svg"
            style="height:20px; margin-top:-6px;"
            alt="nomie wordmark"
          />
        </nuxt-link>

        <div
          :class="`menu-items ${mobile ? 'fullscreen' : ''} ${showMenu ? '_visible' : '_hidden'}`"
        >
          <nuxt-link
            title="Nomie Homepage"
            v-show="mobile"
            :to="`/`"
            class="nav-link hover:underline"
            style="color:#FFF !important"
          >Home</nuxt-link>
          <nuxt-link
            title="Nomie tips and tricks"
            v-show="latest && latest.release"
            :to="`/tutorials`"
            class="nav-link hover:underline"
          >Tutorials</nuxt-link>
          <nuxt-link
            :title="`See all releases`"
            :to="`/release`"
            class="nav-link hover:underline"
          >Releases</nuxt-link>
          <nuxt-link
            :title="`Looking for things to Track?`"
            :to="`/trackers`"
            class="nav-link hover:underline"
          >Library</nuxt-link>
          <nuxt-link
            v-show="mobile"
            :title="`Latest Version`"
            :to="`/latest`"
            class="nav-link hover:underline"
          >Latest Version</nuxt-link>
          <nuxt-link
            v-show="mobile"
            :title="`Frequently Asked Questions`"
            :to="`/faq`"
            class="nav-link hover:underline"
          >Fuq?</nuxt-link>
          <a
            v-show="mobile"
            :title="`GitHub`"
            href="https://github.com/open-nomie/nomie"
            class="nav-link hover:underline"
          >GitHub</a>
        </div>

        <div class="install-buttons">
          <button
            v-if="!$store.state.showInstall && latest && latest.release"
            class="pill bg-white text-white bg-blue-600 px-4 py-1 text-xs rounded-full"
            @click="$store.dispatch('install/show', true)"
          >Get</button>
          <button
            v-if="$store.state.showInstall"
            class="pill bg-red-600 text-white px-4 py-1 text-xs rounded-full"
            @click="$store.dispatch('install/show', false)"
          >Done</button>
        </div>
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
      showMenu: false,
      mobile: this.$Device.size.sm || this.$Device.size.xs,
    }
  },
  computed: {
    latest() {
      return this.$store.state.latest
    },
  },
  watch: {
    $route(to, from) {
      this.closeMenu()
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      setTimeout(() => {
        this.showMenu = false
      }, 120)
    },
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
      this.mobile = this.$Device.size.sm || this.$Device.size.xs
      if (process.client) {
        this.$Device.onScroll(_scrolled)
        this.$Device.onResize(() => {
          this.mobile = this.$Device.size.sm || this.$Device.size.xs
        })
      }
    } else {
      this.mobile = false
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
.header-container {
  height: 60px !important;
}
.scrolled .show-on-scroll {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
header {
  @apply top-0;
  @apply z-50;
  @apply bg-white;
  @apply shadow-2xl;
  @apply bg-gray-900;
}

/* * {
  border: solid 1px red;
} */
main#main-content {
  min-height: 70vh;
}
.nav-link {
  @apply px-2;
  @apply py-1;
  @apply mx-2;
  @apply text-white;
  @apply font-semibold;
}

.menu-items.fullscreen {
  @apply z-40;
  @apply bg-gray-900;
  @apply fixed;
  @apply left-0;
  @apply min-w-full;
  @apply min-h-full;
  @apply p-4;
  @apply pointer-events-none;

  top: 60px;
}

.menu-button {
  @apply text-white;
  @apply pl-1;
  @apply text-left;

  width: 60px;
  font-size: 22px;
  outline: none !important;
}

.menu-items.fullscreen._hidden {
  transition: all 0.2s ease-in;
  transform: translateY(100vh);
}
.menu-items.fullscreen._visible {
  transition: all 0.3s ease-in-out;
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.menu-items.fullscreen .nav-link {
  @apply block;
  @apply text-left;
  @apply text-white;
  @apply border-gray-800;
  @apply py-3;
  border-bottom-width: 1px;
}

.menu-items.fullscreen .nav-link.nuxt-link-active {
  @apply text-blue-400;
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
  min-width: 80px;
}
.header-logo-mark {
  opacity: 0;
}
/* .scrolled .header-logo-words {
  transition: all 0.2s ease-in-out;
  transform: translateX(-100px);
  opacity: 0;
} */

/* .scrolled .header-logo-mark {
  opacity: 1;
} */

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
  @apply z-50;
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
  @apply fixed;
  @apply rounded-full;
  @apply bg-black;
  @apply text-white;
  @apply text-xl;
  @apply z-40;

  top: 6px;
  right: 6px;
  width: 40px;
  height: 40px;
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

header .contain {
  @apply flex;
  @apply items-center;
  @apply justify-between;
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