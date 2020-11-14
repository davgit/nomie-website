export const state = () => {
  return {
    release: null,
  }
}

export const mutations = {
  release(state: any, release: any): void {
    console.log('setting state.release to ', release)
    state.release = release
  },
}
