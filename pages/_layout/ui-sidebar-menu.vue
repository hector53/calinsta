<template>
  <luma-ui-sidebar-menu-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiSidebarMenuPage} from 'vue-luma'

  export default {
    components: {
      LumaUiSidebarMenuPage
    },
    extends: Page,
    data() {
      return {
        title: 'Sidebar Menu'
      }
    }
  }
</script>
