import Vue from 'vue'

/**
 * Global Helpers
 */

import {mapGetters} from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters('settings', [
      'routes'
    ])
  }
})