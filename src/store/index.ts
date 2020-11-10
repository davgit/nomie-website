export const state = () => {
  return {
    showInstall: false,
  }
}

export const mutations = {
  'install/show'(state: any, show: boolean) {
    state.showInstall = show
  },
}

export const actions = {
  'install/show'(context: any, show: boolean) {
    context.commit('install/show', show)
  },
}
