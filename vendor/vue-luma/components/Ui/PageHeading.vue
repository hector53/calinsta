<template>
  <component
    :is="element"
    :class="customClass"
    v-bind="elementProps">
    <slot>Page Heading</slot>
  </component>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String,
        default: () => 'h2'
      },
      element: {
        type: String,
        default: () => 'h1'
      },
      elementProps: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
