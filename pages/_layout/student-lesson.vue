<template>
  <luma-student-lesson-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentLessonPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentLessonPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('View Lesson')
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
        title: app.i18n.t('View Lesson')
      }
    }
  }
</script>
