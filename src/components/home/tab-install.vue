<template>
  <div class="tab-install text-center text-base">
    <h2
      class="leading-auto text-center text-3xl md:text-4xl mb-1 font-semibold"
    >Install to {{tab==='desktop' ? 'Computer' : 'Homescreen'}}</h2>

    <h3
      class="leading-6 text-center mx-1 text-xl md:text-2xl text-gray-500 mb-12 font-normal"
    >For the best experience, install Nomie on your {{tab==='desktop' ? 'computer' : 'home screen'}}.</h3>

    <div class="pills">
      <button :class="{active:tab=='ios'}" @click="tab='ios'">iOS</button>
      <button :class="{active:tab=='android'}" @click="tab='android'">Android</button>
      <button :class="{active:tab=='desktop'}" @click="tab='desktop'">Desktop</button>
    </div>

    <div class="ios" v-if="tab=='ios'">
      <ol class="instructions md:text-2xl text-xl">
        <li>
          Open
          <a href="https://v5.nomie.app" target="_blank">v5.nomie.app</a> in Mobile Safari
        </li>
        <li>
          Tap the
          <svg
            class="inline mx-2"
            height="24"
            viewBox="0 0 28 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7778 11.8095H24.8889C25.714 11.8095 26.5053 12.1206 27.0888 12.6743C27.6722 13.2279 28 13.9789 28 14.7619V28.0476C28 28.8306 27.6722 29.5816 27.0888 30.1353C26.5053 30.6889 25.714 31 24.8889 31H3.11111C2.28599 31 1.49467 30.6889 0.911223 30.1353C0.327777 29.5816 0 28.8306 0 28.0476V14.7619C0 13.9789 0.327777 13.2279 0.911223 12.6743C1.49467 12.1206 2.28599 11.8095 3.11111 11.8095H6.22222V14.7619H3.11111V28.0476H24.8889V14.7619H21.7778V11.8095ZM5.44444 8.11905L7.644 10.2064L12.4444 5.65086V20.6667H15.5556V5.65086L20.356 10.2064L22.5556 8.11905L14 0L5.44444 8.11905Z"
              fill="white"
            />
          </svg> share icon
        </li>
        <li>Scroll to and select "Add to Homescreen"</li>
      </ol>
    </div>

    <!-- Android -->
    <div class="android" v-if="tab=='android'">
      <ol class="instructions md:text-2xl text-xl">
        <li>
          Open
          <a href="https://v5.nomie.app" target="_blank">v5.nomie.app</a> in Mobile Chrome
        </li>
        <li>
          Tap the
          <i class="zmdi zmdi-more-vert mx-2" /> icon in the upper right
        </li>
        <li>Scroll to and select "Add to home screen"</li>
      </ol>
    </div>

    <!-- Desktop -->
    <div class="desktop" v-if="tab=='desktop'">
      <ol class="instructions md:text-2xl text-xl">
        <li>
          Open
          <a href="https://v5.nomie.app" target="_blank">v5.nomie.app</a> in a Chrome Browser
        </li>
        <li>
          Tap the
          <i class="zmdi zmdi-plus-circle-o mx-2" /> icon in the address bar
        </li>
        <li>Select "Install"</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'ios',
    }
  },
}
</script>

<style>
.pills {
  @apply rounded-full;
}
.pills button {
  @apply text-lg;
  @apply py-2;
  @apply px-4;
  @apply rounded-full;
}
.pills button.active {
  @apply bg-gray-300;
  @apply text-gray-900;
  @apply shadow-lg;
}

.instructions {
  @apply text-left;
  @apply p-4;
  @apply rounded-lg;
  @apply bg-gray-800;
  @apply pl-6;
  @apply mt-3;
  @apply mx-auto;

  max-width: 600px;
  list-style: decimal;
}
.instructions li {
  @apply py-2;
  @apply ml-6;
  @apply pl-2;
}
.instructions li a {
  @apply text-blue-600;
}
</style>