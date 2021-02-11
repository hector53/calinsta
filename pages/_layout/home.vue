<template>
  <luma-home-page
    :title="title"
    :container-class="containerClass"
    :local-page-header="localPageHeader"
    :header-image="headerImage"
    :blog-posts1="blogPosts1"
    :blog-posts2="blogPosts2" />
</template>

<script>
  import Page from '~/components/Page'
  import {
    LumaHomePage,
    HomeHero
  } from 'vue-luma'

  export default {
    components: {
      LumaHomePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Home')
      }
    },
    computed: {
      blogPosts1() {
        return [{
          image: "sketch",
          category: "Sketch",
          title: "Merge Duplicates Inconsistent Symbols",
          author_avatar: "/images/256_luke-porter-261779-unsplash.jpg",
          to: this.routes.blogPost
        }, {
          image: "invision",
          category: "inVision",
          title: "Design Systems Essentials",
          author_avatar: "/images/256_michael-dam-258165-unsplash.jpg",
          to: this.routes.blogPost
        }, {
          image: "photoshop",
          category: "Photoshop",
          title: "Semantic Logo Design",
          author_avatar: "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
          to: this.routes.blogPost
        }]
      },
      blogPosts2() {
        return [{
          avatar: "/images/paths/invision_200x168.png",
          title: "Design Systems Essentials",
          views: 35,
          tag: "inVision",
          date: "11 Nov, 2018 07:46 AM",
          avatarGroup: true,
          avatarCount: 3,
          avatars: [
            "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
            "/images/256_michael-dam-258165-unsplash.jpg",
            "/images/256_luke-porter-261779-unsplash.jpg"
          ],
          to: this.routes.blogPost
        }]
      },
      guest() {
        return true
      },
      localPageHeader() {
        return this.$root.layoutName !== 'fixed'
      },
      headerClass() {
        if (this.$root.layoutName === 'fixed') {
          return 'mdk-header--bg-dark bg-dark mb-0'
        }
      },
      headerEffects() {
        if (this.$root.layoutName === 'fixed') {
          return 'parallax-background waterfall'
        }
      },
      headerImage() {
        if (this.$root.layoutName === 'fixed') {
          return '/images/photodune-4161018-group-of-students-m.jpg'
        }
      },
      headerContentClass() {
        if (this.$root.layoutName === 'fixed') {
          return 'justify-content-center'
        }
      },
      headerCondenses() {
        return this.$root.layoutName === 'fixed'
      },
      headerContentComponent() {
        return HomeHero
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Home')
      }
    }
  }
</script>
