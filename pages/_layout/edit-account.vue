<template>
  <luma-edit-account-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaEditAccountPage} from 'vue-luma'

  export default {
    components: {
      LumaEditAccountPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Basic Information')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Basic Information')
      }
    }
  }
</script>
