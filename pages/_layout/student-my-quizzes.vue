<template>
  <luma-student-my-quizzes-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentMyQuizzesPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentMyQuizzesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('My Quizzes')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('My Quizzes')
      }
    }
  }
</script>
