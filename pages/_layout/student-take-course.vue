<template>
  <luma-student-take-course-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentTakeCoursePage} from 'vue-luma'

  export default {
    components: {
      LumaStudentTakeCoursePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Take Course')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Take Course')
      }
    }
  }
</script>
