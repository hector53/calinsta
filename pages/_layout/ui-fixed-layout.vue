<template>
  <luma-ui-fixed-layout-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiFixedLayoutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiFixedLayoutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Fixed Layout'
      }
    }
  }
</script>
