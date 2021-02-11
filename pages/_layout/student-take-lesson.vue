<template>
  <luma-student-take-lesson-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentTakeLessonPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentTakeLessonPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Take Lesson')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Take Lesson')
      }
    }
  }
</script>
