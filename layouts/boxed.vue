<script>
  import AppLayout from '~/layouts/app'

  export default {
    extends: AppLayout,
    computed: {
      bodyClass() {
        return 'layout-boxed'
      },
      sidebarSearch() {
        return false
      },
      sidebarBrandClass() {
        return 'sidebar-brand-dark bg-primary-pickled-bluewood'
      },
      drawerLayoutClass() {
        return 'layout-boxed__layout'
      }
    }
  }
</script>