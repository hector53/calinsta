<template>
  <luma-billing-invoice-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaBillingInvoicePage} from 'vue-luma'

  export default {
    components: {
      LumaBillingInvoicePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Invoice')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Invoice')
      }
    }
  }
</script>
