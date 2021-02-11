export default function({ store, params }) {
  if (process.server) {
    if (params.layout && params.layout !== 'blank') {
      store.dispatch('settings/setSettings', { layout: { layout: params.layout } })
    }
  }
}