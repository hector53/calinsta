<template>
  <luma-login-page
    :title="title" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaLoginPage} from 'vue-luma'

  export default {
    components: {
      LumaLoginPage
    },
    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Login'
      }
    },
    async asyncData() {
      return {
        title: 'Login'
      }
    }
  }
</script>
