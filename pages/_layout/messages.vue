<template>
  <luma-messages-page
    :title="title"
    :container-class="containerClass"
    :navbar-container-class="navbarContainerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {
    LumaMessagesPage,
    MessagesSidebar
  } from 'vue-luma'

  export default {
    components: {
      LumaMessagesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Messages')
      }
    },
    computed: {
      subLayout() {
        return true
      },
      subLayoutHasScrollingRegion() {
        return false
      },
      subLayoutDrawer() {
        return MessagesSidebar
      },
      subLayoutDrawerAlign() {
        return 'end'
      },
      subLayoutDrawerId() {
        return 'messages-drawer'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Messages')
      }
    }
  }
</script>
