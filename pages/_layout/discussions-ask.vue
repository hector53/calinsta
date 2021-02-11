<template>
  <luma-discussions-ask-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaDiscussionsAskPage} from 'vue-luma'
  
  export default {
    components: {
      LumaDiscussionsAskPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Ask Question')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Ask Question')
      }
    }
  }
</script>
