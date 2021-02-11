<template>
  <luma-student-dashboard-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentDashboardPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentDashboardPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Dashboard')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Dashboard')
      }
    }
  }
</script>
