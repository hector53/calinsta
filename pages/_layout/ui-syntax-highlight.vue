<template>
  <luma-ui-syntax-highlight-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiSyntaxHighlightPage} from 'vue-luma'

  export default {
    components: {
      LumaUiSyntaxHighlightPage
    },
    extends: Page,
    data() {
      return {
        title: 'Syntax Highlight'
      }
    }
  }
</script>
