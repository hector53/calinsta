<template>
  <luma-ui-form-image-group-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiFormImageGroupPage} from 'vue-luma'

  export default {
    components: {
      LumaUiFormImageGroupPage
    },
    extends: Page,
    data() {
      return {
        title: 'Form Image Group'
      }
    }
  }
</script>
