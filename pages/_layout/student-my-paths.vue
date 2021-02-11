<template>
  <luma-student-my-paths-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentMyPathsPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentMyPathsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('My Paths')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('My Paths')
      }
    }
  }
</script>
