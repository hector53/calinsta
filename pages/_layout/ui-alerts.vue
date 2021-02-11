<template>
  <luma-ui-alerts-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiAlertsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiAlertsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Alerts'
      }
    }
  }
</script>
