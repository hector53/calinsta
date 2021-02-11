<template>
  <luma-ui-chart-doughnut-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiChartDoughnutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartDoughnutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Doughnut Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Doughnut Chart'
      }
    }
  }
</script>
