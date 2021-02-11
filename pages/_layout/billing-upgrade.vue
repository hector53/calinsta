<template>
  <luma-billing-upgrade-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaBillingUpgradePage} from 'vue-luma'

  export default {
    components: {
      LumaBillingUpgradePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Upgrade Account')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Upgrade Account')
      }
    }
  }
</script>
