<template>
  <luma-billing-payment-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaBillingPaymentPage} from 'vue-luma'

  export default {
    components: {
      LumaBillingPaymentPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Payment Information')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Payment Information')
      }
    }
  }
</script>
