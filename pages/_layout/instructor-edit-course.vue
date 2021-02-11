<template>
  <luma-instructor-edit-course-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorEditCoursePage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorEditCoursePage
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Edit Course')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Edit Course')
      }
    }
  }
</script>
