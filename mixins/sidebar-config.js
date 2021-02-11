export default {
  computed: {
    sidebarConfig() {
      if (this.sidebarConfigKey) {
        return this.$store.state.sidebarConfig[this.sidebarConfigKey]
      }
    },
    sidebarType() {
      try {
        return this.sidebarConfigValue('type')
      } catch(e) {}
    },
    sidebarVariant() {
      try {
        return this.sidebarConfigValue('variant')
      } catch(e) {}
    }
  },
  methods: {
    sidebarConfigValue(key) {
      if (this.sidebarConfig) {
        return this.sidebarConfig[key]
      }
    }
  }
}
