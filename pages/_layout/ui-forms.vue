<template>
  <luma-ui-forms-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiFormsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiFormsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Forms'
      }
    }
  }
</script>
