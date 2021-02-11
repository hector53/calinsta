<template>
  <luma-student-course-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentCoursePage} from 'vue-luma'

  export default {
    components: {
      LumaStudentCoursePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('View Course')
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
        title: app.i18n.t('View Course')
      }
    }
  }
</script>
