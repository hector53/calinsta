<template>
  <luma-signup-page
    :title="title" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaSignupPage} from 'vue-luma'

  export default {
    components: {
      LumaSignupPage
    },
    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Sign Up'
      }
    }
  }
</script>
