<template>
  <luma-ui-drawer-layout-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiDrawerLayoutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiDrawerLayoutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Drawer Layout'
      }
    }
  }
</script>
