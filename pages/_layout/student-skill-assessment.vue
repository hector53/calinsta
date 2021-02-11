<template>
  <luma-student-skill-assessment-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentSkillAssessmentPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentSkillAssessmentPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Skill Assessment')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Skill Assessment')
      }
    }
  }
</script>
