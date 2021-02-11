<template>
  <luma-student-quiz-result-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentQuizResultPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentQuizResultPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Quiz Result')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Quiz Result')
      }
    }
  }
</script>
