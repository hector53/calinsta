<template>
  <luma-forgot-password-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaForgotPasswordPage} from 'vue-luma'

  export default {
    components: {
      LumaForgotPasswordPage
    },
    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Forgot Password?'
      }
    },
    async asyncData() {
      return {
        title: 'Forgot Password?'
      }
    }
  }
</script>
