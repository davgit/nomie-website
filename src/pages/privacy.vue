<template>
  <Layout :showBack="true">
    <div class="contain mx-auto mb-3 md:mb-5">
      <h1 class="website-title text-4xl lg:text-6xl">Privacy Policy</h1>
    </div>

    <div class="primary-content contain content px-5">
      <div>
        <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
        <h2>What personal information do we collection?</h2>
        <p>Nomie does not collect any personal identifiable information. Period.</p>
        <h2>No Third-party disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information - because we do not have any.</p>
        <h2>No Third-party links</h2>
        <p>We do not include or offer third-party products or services on our website.</p>
        <h2>API Data</h2>
        <p>Data pushed to Nomie's API is encrypted with your own public key once it's received by the Nomie API server. Only your Nomie can decrypt the data with the private key that's on your device, meaning all data is encrypted at rest. If you lose your API key, or Private key, there is nothing we can do.</p>
        <h2>Third-party Services [Important]</h2>
        <p>
          Nomie uses Open Street Maps for mapping. If you enable Location lookup, or find a location using the map,
          <strong>Nomie sends the latitude and longitude to arcgis.com to find the address</strong>.
        </p>
        <p>
          <strong>No Google Analytics or Advertising Metric tools.</strong>
        </p>
        <p>
          Nomie does not enabled Google AdSense, Google Analytics within the App. Nomie does uses
          <a
            href="https://simpleanalytics.com"
          >SimpleAnalytics</a> for page view metrics. Simple Analytics is a privacy focused web stat platform and does not use cookies, or identify individual users.
        </p>
        <h2>Fair Information Practices</h2>
        <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
        <p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
        <ul>
          <li>We will notify the users via in-site notification within 2 business days</li>
        </ul>
        <h2>CAN SPAM Act</h2>
        <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
        <h3>We collect your email address in order to:</h3>
        <p>We don't</p>
        <h2>Contacting Us</h2>
        <p>If there are any questions regarding this privacy policy, you may contact us using the information below.</p>
        <h3>Happy Data, LLC dba Nomie</h3>
        <p>
          11650 Olio Road, Suite 1000-118
          Fishers, IN 46040 USA
          support@happydata.org
          317-606-3862
        </p>
        <p>Edited on 2020-04-24</p>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/layout/layout.vue'
import TabPrivacy from '@/components/home/tab-privacy.vue'
import TabInstall from '@/components/home/tab-install.vue'
import TabFree from '@/components/home/tab-free.vue'
import Screenshots from '@/components/image-scroller/image-scroller.vue'

export default Vue.extend({
  components: {
    Layout,
    TabPrivacy,
    TabInstall,
    TabFree,
    Screenshots,
  },
  data() {
    return {
      tab: 'privacy',
    }
  },
})
</script>

<style>
.website-title {
  @apply font-black;
  @apply p-6;

  line-height: 120%;
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
</style>
