<template>
  <luma-billing-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaBillingPage} from 'vue-luma'

  export default {
    components: {
      LumaBillingPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Subscription')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Subscription')
      }
    }
  }
</script>
