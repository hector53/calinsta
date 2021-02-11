<template>
  <luma-pricing-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaPricingPage} from 'vue-luma'

  export default {
    components: {
      LumaPricingPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Pricing')
      }
    },
    computed: {
      guest() {
        return true
      },
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Pricing')
      }
    }
  }
</script>
