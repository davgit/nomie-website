import axios from 'axios'
import { $content } from '@nuxt/content'

export default async () => {
  let releases = await $content('releases').sortBy('createdAt', 'desc').fetch()
  let tutorials = await $content('tutorials')
    .sortBy('createdAt', 'desc')
    .fetch()
  let faqs = await $content('faqs').sortBy('createdAt', 'desc').fetch()

  let releasesMap = releases.map((release: any) => {
    return {
      route: `/release/${release.slug}`,
      payload: release,
    }
  })

  let tutorialsMap = tutorials.map((release: any) => {
    return {
      route: `/tutorials/${release.slug}`,
      payload: release,
    }
  })

  let faqMap = faqs.map((faq: any) => {
    return {
      route: `/faq/${faq.slug}`,
      payload: faq,
    }
  })

  return [...tutorialsMap, ...releasesMap, ...faqMap]
}
