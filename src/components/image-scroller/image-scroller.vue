<template>
  <section class="screenshots">
    <div class="scroller">
      <button
        class="image-wrapper"
        data-content="Install trackers from the library, or create your own. 🧙‍♀️"
      >
        <img src="/images/v5/screenshots/tracker-tab.jpeg" alt="Life Tracking Library" />
      </button>
      <button class="image-wrapper" data-content="Range Input. Super simple data input for Ranges">
        <img src="/images/v5/screenshots/tracker-range.jpeg" alt="Life Tracking Range Input" />
      </button>
      <button class="image-wrapper" data-content="Number Input. It's a calculator.">
        <img src="/images/v5/screenshots/tracker-number.jpeg" alt="Life Tracking number input" />
      </button>
      <button class="image-wrapper" data-content="Quickly see what happened on any given day">
        <img src="/images/v5/screenshots/history.jpeg" alt="People Life tracking" />
      </button>
      <button
        class="image-wrapper"
        data-content="Quickly log the time you spend with friends and family."
      >
        <img src="/images/v5/screenshots/people.jpeg" alt="Check-in with your People" />
      </button>
      <button
        class="image-wrapper"
        data-content="📊 Visualize and compare trackers, people, and notes"
      >
        <img src="/images/v5/screenshots/stats.jpeg" alt="Life Tracking Stats" />
      </button>
      <button class="image-wrapper" data-content="📊 Custom Dashboards too">
        <img src="/images/v5/screenshots/dashboard.jpeg" alt="Life Tracking Dashboard" />
      </button>
      <button class="image-wrapper" data-content="See how you're doing with monthly streaks. 📆">
        <img src="/images/v5/screenshots/streak.jpeg" alt="Life Tracking Streak" />
      </button>
    </div>
  </section>
</template>

<script>
export default {}
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
.screenshots .scroller img {
  @apply rounded-3xl;
  @apply overflow-hidden;
  @apply flex-shrink-0;
  @apply flex-grow-0;

  margin: 0 10px;
  height: 60vh;
}
.screenshots .image-wrapper {
  @apply relative;
  @apply flex-shrink-0;
  @apply flex-grow-0;

  outline: none !important;
  transition: all 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}
.screenshots .image-wrapper:active,
.screenshots .image-wrapper:focus {
  transform: scale(0.9);
}

.screenshots .image-wrapper:active::after,
.screenshots .image-wrapper:focus::after {
  @apply shadow-lg;

  opacity: 1;
  transform: translateY(-100px);
}

.screenshots .image-wrapper:active img,
.screenshots .image-wrapper:focus img {
  filter: blur(6px);
}

.screenshots .image-wrapper::after {
  @apply bg-blue-600;
  @apply text-white;
  @apply rounded-lg;
  @apply leading-5;
  @apply text-center;
  @apply absolute;
  @apply left-0;
  @apply right-0;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply px-4;
  @apply py-2;
  @apply mx-auto;
  @apply shadow-md;

  top: 60%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  content: attr(data-content);
  pointer-events: none;
}
</style>