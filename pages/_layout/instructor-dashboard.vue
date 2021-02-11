<template>
  <luma-instructor-dashboard-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorDashboardPage} from 'vue-luma'
  
  export default {
    components: {
      LumaInstructorDashboardPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Dashboard')
      }
    }
  }
</script>
