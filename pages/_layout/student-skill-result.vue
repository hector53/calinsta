<template>
  <luma-student-skill-result-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentSkillResultPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentSkillResultPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Path Details')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Path Details')
      }
    }
  }
</script>
