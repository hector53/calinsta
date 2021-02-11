<template>
  <luma-ui-drawer-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiDrawerPage} from 'vue-luma'

  export default {
    components: {
      LumaUiDrawerPage
    },
    extends: Page,
    data() {
      return {
        title: 'Drawer'
      }
    }
  }
</script>
