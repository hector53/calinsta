<template>
  <luma-ui-avatar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiAvatarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiAvatarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Avatar'
      }
    }
  }
</script>
