<template>
  <luma-edit-account-notifications-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaEditAccountNotificationsPage} from 'vue-luma'

  export default {
    components: {
      LumaEditAccountNotificationsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Email Notifications')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Email Notifications')
      }
    }
  }
</script>
