<template>
  <luma-instructor-quizzes-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorQuizzesPage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorQuizzesPage,
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Manage Quizzes')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Manage Quizzes')
      }
    }
  }
</script>
