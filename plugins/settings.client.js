const { name, version } = require('~/package.json')
import { Session } from 'fm-app-settings'
import dot from 'dot-object'

export default function({ store, params }) {
  let settings = JSON.parse(JSON.stringify(store.getters.settings))

  if (params.layout && params.layout !== 'blank') {
    settings.layout.layout = params.layout
    store.dispatch('settings/setSettings', settings)
  }

  let session = new Session(`${name}-${version}`)

  if (params.layout && params.layout !== 'blank') {
    let memory = session.memory('settings')
    if (memory) {
      dot.object(memory)
    }

    if (!memory || (memory && memory.layout.layout !== params.layout)) {
      session.save('settings', dot.dot(settings))
    }
  }

  if (!store.state.settings.ui) {
    return
  }

  settings = session.memory('settings')
  if (settings) {
    dot.object(settings)
    store.dispatch('settings/setSettings', settings)
  }
}