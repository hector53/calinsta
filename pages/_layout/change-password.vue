<template>
  <luma-change-password-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaChangePasswordPage} from 'vue-luma'

  export default {
    components: {
      LumaChangePasswordPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Change Password')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Change Password')
      }
    }
  }
</script>
