export const state = () => {
  return {
    showInstall: false,
    downloadTracker: null,
  }
}

export const mutations = {
  'install/show'(state: any, show: boolean) {
    state.showInstall = show
  },
  'download/tracker'(state: any, trackerPack: any) {
    state.downloadTracker = trackerPack
  },
}

export const actions = {
  'install/show'(context: any, show: boolean) {
    context.commit('install/show', show)
  },
}
