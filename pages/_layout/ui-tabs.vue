<template>
  <luma-ui-tabs-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiTabsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiTabsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Tabs'
      }
    }
  }
</script>
