<template>
  <luma-student-take-quiz-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentTakeQuizPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentTakeQuizPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Take Quiz')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Take Quiz')
      }
    }
  }
</script>
