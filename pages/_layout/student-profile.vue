<template>
  <luma-student-profile-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentProfilePage} from 'vue-luma'

  export default {
    components: {
      LumaStudentProfilePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Student Profile')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Student Profile')
      }
    }
  }
</script>
