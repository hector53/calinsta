## Luma Nuxt v2.2.0
> Oct 29, 2020

```
Changes
- Improved browser support via babel and core-js@3 (last 2 versions of every major browser, IE >= 11)
- Reorganized plugin files into matching npm modules names (ie. plugins/charts.js -> plugins/fmv-charts.js)
- Added globaly injected routes for all demo links (see plugins/app.js, store/settings.js and store/sidebarMenuConfig.js)
- Renamed 'default' layout to 'app' layout
- Added webpack config for working with symlinked modules
- Added blog posts props on home and blog page
- Improved components docs type pages nav
- Cleanup mixins/layout-config.js
- Bumped vue-luma to v2.1.0 (see below)

vue-luma v2.1.0
- Added anchored headings 
- Improved docs page nav 
- Fixed some links 
- Bump fmv-layout to v2.2.4 (fixes sidebar menu items active route matching when using vue-router)

vue-luma v2.0.2
- Fixed route to mixin issue

vue-luma v2.0.1
- Fixed form image group page issue

vue-luma v2.0.0
- Breaking change: use globally injected routes on all links
- Bumped fmv-layout to v2.2.2 (adds sidebar menu item badge)
- Added login page form error handling 
- Added login page auth functionality 
- Added ability to customize the login page logo, brand, texts, errors and callbacks via props
- Added ability to customize the forgot password page logo, brand, texts, errors and callbacks via props
- Added i18n dropdown component 
- Added navbar content logout route prop 
- Added ability to customize the signup page logo, brand, texts, errors and callbacks via props
- Added support for inertia.js routing
- Added vue-no-ssr dependency
- Cleaned-up side effects in reveal component destroy method
- Fixed component doc / componentOptions prop type error
- Added docs page / layoutHasStickyNavbar prop
- Fixed docs page / get scroll hash from window instead of router injected current $route
- Added faq card title link
- Fixed home hero i18n issues
- Replaced client-only with no-ssr
- Binded layout props to default slot 'layoutProps' key instead of 'layout'
- Binded fixed/sticky layout props to default slot
- Fixed navbar full content sample errors when not using vue router
- Fixed sidebar menu issues
- Added routeTo mixin support for object type routes
- Remove home and blog page default blog posts props data
```

## Luma Nuxt v2.1.1
> Oct 6, 2020

```
Changes
- Fixed issues caused by gitignore
```

## Luma Nuxt v2.1.0
> Oct 5, 2020

```
Changes
- Added SSR (Server Side Rendering) and full static site generation
- Fixed RTL (Right-to-Left) issues

Dependencies
- Updated vue-luma to v1.1.1
- Updated dom-factory to v1.1.0
- Updated material-design-kit to v2.2.0
- Updated fmv-layout to v2.2.1
- Updated fm-app-settings to v5.4.0
- Updated fmv-avatar to v1.2.0
- Updated fmv-input-group-merge to v1.1.0
- Updated bv-form-image-group to v1.1.0

Tooling
- Added @nuxtjs/eslint-module
- Updated sass-loader to v10.0.2
```

## Luma Nuxt v2.0.0
> Sep 28, 2020

```
Summary
- New and Improved account & billing pages
- Extracted the layouts, pages and components to a standalone package [vendor/vue-luma]
- Extracted the syntax highlight component to a standalone package [fmv-highlight]
- Extracted the charts components to a standalone package [fmv-charts]
- Included vendor/ui-huma private package directly in the item download
- Moved dependencies not related to Nuxt.js to vendor/vue-luma package
- Decoupled components from Nuxt.js
- Moved Nuxt.js pages under a dynamic layout route (layout-name/page-name)
- Improved sidebar menu component data initialization (fixes menu reloading issue) [fmv-layout]
- Fix sidebar submenu toggle redirect to '/#' issue [fmv-layout]
- Added view course header scroll effects
- Fix side-effects on body and html tags when changing layouts [material-design-kit]
- Changed scss loader from node-sass implementation to dart sass

Layouts Improvements
- Use layouts and pages as Vue components
- Added layout slots to customize the navbar, sidebar and footer

Account & Billing
- Added edit account email notifications page
- Improved change password page
- Improved edit account basic information page
- Improved edit account profile & privacy page
- Improved billing subscription page
- Improved billing upgrade account page
- Improved billing payment information page
- Improved billing payment history page
- Improved billing invoice page

Dependencies
- Updated fmv-layout to v2.1.1
- Updated material-design-kit to v2.0.0
- Updated ui-huma to v1.7.3
- Updated bootstrap-vue to v2.17.3
- Updated Bootstrap to v4.5.2

Nuxt
- Customize the Nuxt loading indicator
```

## Luma Nuxt v1.1.0
> Jun 8, 2020

```
- Added sticky layout
- Added boxed layout
- Added parallax component
- Added blog parallax header
- Added layout settings
```

## Luma Nuxt v1.0.0
> Jun 4, 2020

```
- Initial release
```
