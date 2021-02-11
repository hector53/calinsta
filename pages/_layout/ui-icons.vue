<template>
  <luma-ui-icons-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiIconsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiIconsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Icons'
      }
    }
  }
</script>
