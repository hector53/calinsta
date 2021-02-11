<template>
  <luma-ui-header-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiHeaderPage} from 'vue-luma'

  export default {
    components: {
      LumaUiHeaderPage
    },
    extends: Page,
    data() {
      return {
        title: 'Header'
      }
    }
  }
</script>
