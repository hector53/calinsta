<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <anchored-heading
        class="mb-8pt"
        title="Usage" />

      <fmv-highlight
        :code="code"
        class="card card-body bg-dark" />

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'
  import {FmvDrawer} from 'fmv-layout'

  export default {
    components: {
      DocsPage,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvDrawer',
          componentOptions: FmvDrawer
        },
        code: `
          <template>
            <fmv-drawer align="start">
              // drawer content
            </fmv-drawer>
          </template>
          
          <script>
          import {FmvDrawer} from 'fmv-layout'

          export default {
            components: {
              FmvDrawer
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
