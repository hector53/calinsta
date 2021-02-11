<template>
  <luma-discussion-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaDiscussionPage} from 'vue-luma'

  export default {
    components: {
      LumaDiscussionPage,
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Discussion')
      }
    },
    computed: {
      guest() {
        return true
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Discussion')
      }
    }
  }
</script>
