<template>
  <luma-student-paths-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :results-heading-sidebar-toggle="resultsHeadingSidebarToggle" />
</template>

<script>
  import Page from '~/components/Page'
  import {
    LumaStudentPathsPage,
    LibraryDrawer,
    LibrarySidebar
  } from 'vue-luma'

  export default {
    components: {
      LumaStudentPathsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Paths')
      }
    },
    computed: {
      guest() {
        return true
      },
      subLayout() {
        return this.$root.layoutName === 'fixed'
      },
      subLayoutDrawer() {
        return this.$root.layoutName === 'fixed' 
          ? LibrarySidebar
          : LibraryDrawer
      },
      subLayoutDrawerId() {
        return 'library-drawer'
      },
      resultsHeadingSidebarToggle() {
        return this.$root.layoutName === 'fixed' ? 'mobile' : true
      }
    }
  }
</script>
