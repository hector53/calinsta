<template>
  <luma-ui-sidebar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiSidebarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiSidebarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Sidebar'
      }
    }
  }
</script>
