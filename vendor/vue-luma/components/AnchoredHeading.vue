<script>
import { kebabCase } from 'lodash'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    level: {
      type: [Number, String],
      default: 4
    }
  },
  data() {
    return {
      id: null
    }
  },
  watch: {
    title: {
      immediate: true,
      handler() {
        this.id = kebabCase(this.title)
      }
    }
  },
  render(h) {
    const $anchor = h(
      'b-link',
      {
        staticClass: 'anchorjs-link',
        props: { to: { hash: `#${this.id}` } },
        attrs: {
          'aria-labelledby': this.id || null,
          'aria-label': this.id ? null : 'Anchor'
        }
      },
      [h()]
    )

    const $content = h('span', { staticClass: 'bd-content-title' }, [this.title])

    return h(
      `h${this.level}`,
      {
        staticClass: 'bv-no-focus-ring',
        attrs: {
          id: this.id,
          tabindex: '-1'
        }
      },
      [$content, $anchor]
    )
  },
  created() {
    this.$root.$emit('luma::anchored-heading', {
      id: this.id,
      title: this.title
    })
  }
}
</script>

<style lang="scss">
.anchorjs-link {
  padding-left: 0.375em;
  opacity: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &,
  &:hover {
    color: inherit;
  }

  &::after {
    content: "#";
  }
}

*:hover > .anchorjs-link,
.anchorjs-link:focus {
  opacity: 1;
}
</style>