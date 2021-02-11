<template>
  <luma-instructor-profile-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorProfilePage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorProfilePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Instructor Profile'),
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Instructor Profile')
      }
    }
  }
</script>
