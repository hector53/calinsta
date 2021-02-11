<template>
  <div 
    :class="containerClass"
    class="page__container p-0">
    <div class="row">
      <div class="col-lg container-fluid page__container pb-32pt">
        <page-header
          :title="title"
          :breadcrumb="breadcrumb"
          page-heading-element="anchored-heading"
          :page-heading-element-props="{ 
            level: 1,
            title
          }"
          class="page-section" />

        <slot />

        <!-- main component reference information -->
        <component-doc
          v-if="meta && meta.component"
          :name="startCase(meta.component)"
          :component="meta.component"
          :component-options="meta.componentOptions"
          :slots="meta.slots"
          :aliases="meta.aliases" />
      </div>
      <div 
        id="page-nav"
        class="col-lg-auto page-nav">
        <div 
          class="page-section position-sticky"
          :style="{ top: `${scrollOffset}px` }">
          <div class="page-nav__content">
            <page-separator :title="$t('Table of Contents')" />
          </div>

          <b-nav
            v-if="nav.length && rendered"
            v-b-scrollspy="{ offset: scrollOffset }"
            class="page-nav__menu">
            <li
              v-for="(item, index) in nav"
              :key="`page-nav-${index}`"
              class="nav-item">
              <b-link
                :to="`#${item.id}`"
                class="nav-link"
                @click="scrollIntoView(item.id)">
                {{ item.title }}
              </b-link>
            </li>
          </b-nav>

          <div class="page-nav__content">
            <next-link
              v-if="meta && (meta.next || meta.prev)"
              :next="meta.next"
              :prev="meta.prev"
              class="mb-24pt" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-nav {
    top: 0;
  }
</style>

<script>
  // import {
  //   ComponentDoc,
  //   PageHeader,
  //   NextLink,
  //   PageSeparator
  // } from 'vue-luma'

  import ComponentDoc from '~/components/Docs/ComponentDoc.vue'
  import NextLink from '~/components/Docs/NextLink.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  import { scrollTo, offsetTop } from '~/utils/doc'
  import { startCase } from 'lodash'

  export default {
    components: {
      ComponentDoc,
      NextLink,
      PageHeader,
      PageSeparator
    },
    props: {
      containerClass: {
        type: [String, Array, Object],
        default: () => 'container page__container'
      },
      meta: {
        type: Object,
        default: () => {}
      },
      title: {
        type: String,
        default: null
      },
      breadcrumb: {
        type: Array,
        default: () => []
      },
      navReference: {
        type: Boolean,
        default: true
      },
      layoutHasStickyNavbar: {
        type: Boolean
      }
    },
    data() {
      return {
        rendered: false,
        nav: []
      }
    },
    computed: {
      scrollOffset() {
        return this.layoutHasStickyNavbar ? 64 + 24 : 0
      }
    },
    watch: {
      rendered() {
        this.scrollTo(0)
      }
    },
    created() {
      this.$root.$on('luma::anchored-heading', ({id, title}) => {
        if (! this.nav.find(nav => nav.id === id)) {
          this.nav.push({
            id,
            title
          })
        }
      })
    },
    mounted() {
      this.$nextTick(() => this.rendered = true)
    },
    methods: {
      startCase,
      scrollTo(duration) {
        let hash = window.location.hash
        if (hash) {
          this.scrollIntoView(hash, duration)
        }
      },
      scrollIntoView(id, duration = 300, cb) {
        id = id.indexOf('#') === -1 ? `#${id}` : id

        let el = document.querySelector(id)

        const scroller =
          document.scrollingElement || document.documentElement || document.body

        const offset = el ? offsetTop(el) - this.scrollOffset : 0
        
        scrollTo(scroller, offset, duration, cb)
      }
    }
  }
</script>
