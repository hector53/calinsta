export const state = () => ({
  brand: 'Luma',
  docsHostname: 'www.lumalms.com'
})

export const getters = {
  settings: state => state.settings.state
}