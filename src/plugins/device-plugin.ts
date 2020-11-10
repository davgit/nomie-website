import Device from '@/modules/device/device'
import Vue from 'vue'
import { Plugin } from '@nuxt/types'

const _device = new Device() // singleton

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $Device: Device
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $Device: Device
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $Device: Device
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $Device: Device
  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('Device', _device)
}

export default myPlugin

// const _device = new Device()

// declare module '@nuxt/types' {
//   interface Context {
//     $Device: Device
//   }
// }

// const DevicePlugin: Plugin = (context) => {
//   context.$Device = _device
// }

// export default DevicePlugin

// // export default (context: any, inject: any) => {
// //   let source: any

// //   if (process.client) {
// //     source = window.navigator
// //   } else {
// //     source = undefined
// //   }
// //   // Inject $hello(msg) in Vue, context and store.
// //   inject('Device', _device)
// //   // For Nuxt <= 2.12, also add 👇
// //   context.$Device = _device
// // }
