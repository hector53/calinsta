export default {
  computed: {
    layoutConfig() {
      return this.$store.state.layoutConfig[this.$root.layoutName]
    },
    containerClass() {
      return this.layoutConfig.containerClass
    },
    navbarContainerClass() {
      const classes = { 'p-0': this.$root.layoutName === 'fixed' }
      
      let containerClass = this.layoutConfig.navbarContainerClass
      if (!containerClass) {
        containerClass = this.layoutConfig.containerClass
      }

      classes[containerClass] = true
      return classes
    }
  }
}