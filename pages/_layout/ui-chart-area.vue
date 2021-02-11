<template>
  <luma-ui-chart-area-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiChartAreaPage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartAreaPage
    },
    extends: Page,
    data() {
      return {
        title: 'Area Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Area Chart'
      }
    }
  }
</script>
