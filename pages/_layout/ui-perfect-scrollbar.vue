<template>
  <luma-ui-perfect-scrollbar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiPerfectScrollbarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiPerfectScrollbarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Perfect Scrollbar'
      }
    }
  }
</script>
