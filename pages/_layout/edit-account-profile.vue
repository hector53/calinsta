<template>
  <luma-edit-account-profile-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaEditAccountProfilePage} from 'vue-luma'

  export default {
    components: {
      LumaEditAccountProfilePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Profile & Privacy')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Profile & Privacy')
      }
    }
  }
</script>
