import Device from '~/modules/device/device'

declare module '@nuxt/types' {
  interface Context {
    $Device: Device
  }
}
