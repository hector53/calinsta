<template>
  <div>
    <docs-page
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <anchored-heading
        class="mb-8pt"
        title="Usage" />

      <fmv-highlight
        class="card card-body bg-dark"
        lang="html"
        :code="`
          <template>
            <md-icon>help</md-icon>
          </template>

          <script>
            import {MdIcon} from 'vue-luma'

            export default {
              components: {MdIcon}
            }
          </script>
        `" />

      <!-- main component reference information -->
      <component-doc
        :component="meta.component"
        :component-options="meta.componentOptions" />

      <anchored-heading
        class="mb-8pt"
        title="Search Icons" />

      <icons-app />
    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   ComponentDoc,
  //   IconsApp,
  //   MdIcon
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import ComponentDoc from '~/components/Docs/ComponentDoc.vue'
  import IconsApp from '~/components/DemoIcons/IconsApp.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      DocsPage,
      ComponentDoc,
      IconsApp,
      FmvHighlight
    },
    extends: Page,
    data() {
      return {
        meta: {
          component: 'MdIcon',
          componentOptions: MdIcon
        }
      }
    }
  }
</script>
