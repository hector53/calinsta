<template>
  <luma-ui-header-layout-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiHeaderLayoutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiHeaderLayoutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Header Layout'
      }
    }
  }
</script>
