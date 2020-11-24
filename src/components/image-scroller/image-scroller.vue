<template>
  <section class="screenshots">
    <div class="scroller">
      <ImgLoader
        height="60vh"
        class="mr-3"
        label="Install trackers from the library, or create your own. 🧙‍♀️"
      >
        <img src="/images/v5/screenshots/tracker-tab.jpeg" alt="Life Tracking Library" />
      </ImgLoader>
      <ImgLoader height="60vh" class="mr-3" label="Range Input. Super simple data input for Ranges">
        <img src="/images/v5/screenshots/tracker-range.jpeg" alt="Life Tracking Range Input" />
      </ImgLoader>
      <ImgLoader height="60vh" class="mr-3" label="Number Input. It's a calculator.">
        <img src="/images/v5/screenshots/tracker-number.jpeg" alt="Life Tracking number input" />
      </ImgLoader>
      <ImgLoader height="60vh" class="mr-3" label="Quickly see what happened on any given day">
        <img src="/images/v5/screenshots/history.jpeg" alt="People Life tracking" />
      </ImgLoader>
      <ImgLoader
        height="60vh"
        class="mr-3"
        label="Quickly log the time you spend with friends and family."
      >
        <img src="/images/v5/screenshots/people.jpeg" alt="Check-in with your People" />
      </ImgLoader>
      <ImgLoader
        height="60vh"
        class="mr-3"
        label="📊 Visualize and compare trackers, people, and notes"
      >
        <img src="/images/v5/screenshots/stats.jpeg" alt="Life Tracking Stats" />
      </ImgLoader>
      <ImgLoader height="60vh" class="mr-3" label="📊 Custom Dashboards too">
        <img src="/images/v5/screenshots/dashboard.jpeg" alt="Life Tracking Dashboard" />
      </ImgLoader>
      <ImgLoader height="60vh" class="mr-3" label="See how you're doing with monthly streaks. 📆">
        <img src="/images/v5/screenshots/streak.jpeg" alt="Life Tracking Streak" />
      </ImgLoader>
    </div>
  </section>
</template>

<script>
import ImgLoader from './image-loader.vue'
export default {
  components: {
    ImgLoader,
  },
}
</script>

<style>
.screenshots {
  @apply p-6;
  @apply overflow-x-auto;
  @apply overflow-y-hidden;
}
.screenshots .scroller {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 100%;
  flex-shrink: 0;
}
/* .screenshots .scroller img {
  @apply rounded-3xl;
  @apply overflow-hidden;
} */
</style>