<template>
  <div :class="navbarContentContainerClass">
    <!-- Brand -->
    <b-navbar-brand 
      :to="routeTo(routes.home)"
      :class="navbarBrandClass">
      <fmv-avatar
        :title="true"
        title-class="bg-primary"
        size="sm"
        no-link
        class="navbar-brand-icon mr-0 mr-lg-8pt">
        <b-img 
          :src="brandImage" 
          class="img-fluid"
          width="40" 
          :alt="navbarBrand" />
      </fmv-avatar>
      <span 
        class="d-none d-lg-block"
        v-text="navbarBrand" />
    </b-navbar-brand>

    <template v-if="! navbarFullSampleGuestMode && navbarStats && ! isInstructor">
      <span
        class="d-none d-md-flex align-items-center mr-16pt">
        <fmv-avatar
          :title="true"
          title-class="navbar-avatar"
          size="sm"
          class="mr-12pt">
          <md-icon>opacity</md-icon>
        </fmv-avatar>
        <small class="flex d-flex flex-column">
          <strong class="navbar-text-100">Experience IQ</strong>
          <span class="navbar-text-50">2,300 points</span>
        </small>
      </span>
    </template>

    <template v-if="! navbarFullSampleGuestMode && navbarStats && isInstructor">
      <span class="d-none d-md-flex align-items-center mr-16pt">
        <fmv-avatar
          :title="true"
          title-class="navbar-avatar"
          size="sm"
          class="mr-12pt">
          <md-icon>trending_up</md-icon>
        </fmv-avatar>
        <small class="flex d-flex flex-column">
          <strong 
            class="navbar-text-100"
            v-text="$t('Earnings')" />
          <span class="navbar-text-50">&dollar;12.3k</span>
        </small>
      </span>
      <span class="d-none d-md-flex align-items-center mr-16pt">
        <fmv-avatar
          :title="true"
          title-class="navbar-avatar"
          size="sm"
          class="mr-12pt">
          <md-icon>receipt</md-icon>
        </fmv-avatar>
        <small class="flex d-flex flex-column">
          <strong 
            class="navbar-text-100"
            v-text="$t('Sales')" />
          <span class="navbar-text-50">264</span>
        </small>
      </span>
    </template>

    <template v-if="navbarFullSampleGuestMode">
      <b-navbar-nav
        class="d-none d-sm-flex flex justify-content-start ml-8pt">
        <b-nav-item 
          :to="routeTo(routes.home)"
          exact>
          {{ $t('Home') }}
        </b-nav-item>
        <b-nav-item-dropdown
          :text="$t('Courses')"
          no-caret>
          <b-dropdown-item :to="routeTo(routes.studentCourses)">{{ $t('Browse Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentCourse)">{{ $t('Preview Course') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentLesson)">{{ $t('Preview Lesson') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentTakeCourse)">
            <span class="mr-16pt">{{ $t('Take Course') }}</span>
            <b-badge 
              variant="accent badge-notifications"
              class="text-uppercase ml-auto"
              v-text="$t('Pro')" />
          </b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentTakeLesson)">{{ $t('Take Lesson') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentTakeQuiz)">{{ $t('Take Quiz') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentQuizResult)">{{ $t('Quiz Result') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentDashboard)">{{ $t('Student Dashboard') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentMyCourses)">{{ $t('My Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentMyQuizzes)">{{ $t('My Quizzes') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          :text="$t('Paths')"
          no-caret>
          <b-dropdown-item :to="routeTo(routes.studentPaths)">{{ $t('Browse Paths') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentPath)">{{ $t('Path Details') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentSkillAssessment)">{{ $t('Skill Assessment') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentSkillResult)">{{ $t('Skill Result') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentMyPaths)">{{ $t('My Paths') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :to="routeTo(routes.pricing)">{{ $t('Pricing') }}</b-nav-item>
        <b-nav-item-dropdown
          :text="$t('Instructor')"
          no-caret>
          <b-dropdown-item :to="routeTo(routes.instructorDashboard)">{{ $t('Instructor Dashboard') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorCourses)">{{ $t('Manage Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorQuizzes)">{{ $t('Manage Quizzes') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorEarnings)">{{ $t('Earnings') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorStatement)">{{ $t('Statement') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorEditCourse)">{{ $t('Edit Course') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorEditQuiz)">{{ $t('Edit Quiz') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          v-b-tooltip.hover.bottom="{ title: $t('Community') }" 
          no-caret
          right>
          <template slot="button-content">
            <md-icon>people_outline</md-icon>
          </template>
          <b-dropdown-item :to="routeTo(routes.teachers)">{{ $t('Browse Teachers') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.studentProfile)">{{ $t('Student Profile') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.instructorProfile)">{{ $t('Instructor Profile') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.blog)">{{ $t('Blog') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.blogPost)">{{ $t('Blog Post') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.faq)">{{ $t('FAQ') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.helpCenter)">{{ $t('Help Center') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.discussions)">{{ $t('Discussions') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.discussion)">{{ $t('Discussion Details') }}</b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.askQuestion)">{{ $t('Ask Question') }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </template>
    
    <template v-if="navbarSearch">
      <!-- Search -->
      <b-form
        class="search-form navbar-search d-none mr-16pt"
        :class="{ 
          'd-lg-flex': navbarFullSampleGuestMode,
          'd-md-flex': !navbarFullSampleGuestMode
        }">
        <b-button variant="none">
          <md-icon>search</md-icon>
        </b-button>
        <b-form-input
          :placeholder="$t('Search')"
          type="text" />
      </b-form>
      <!-- // END Search -->
    </template>
    
    <!-- Menu -->
    <b-navbar-nav class="flex-nowrap d-flex ml-auto">

      <template 
        v-if="navbarFullSampleGuestMode">
        <b-nav-item
          v-b-tooltip.hover.bottom="{ title: $t('Login') }" 
          :to="routeTo(routes.login)">
          <md-icon>lock_open</md-icon>
        </b-nav-item>
        <li 
          class="nav-item">
          <b-btn
            :to="routeTo(routes.signup)" 
            :variant="ctaClass"
            v-text="$t('Sign Up')" />
        </li>
      </template>

      <template 
        v-else>

        <!-- Messages -->
        <navbar-notifications
          icon="mail_outline"
          icon-class="icon-24pt"
          title="Messages"
          :notifications="messages"
          :route-messages="routes.messages" />
        
        <!-- Notifications -->
        <navbar-notifications
          :badge="true"
          :notifications="notifications"
          :route-messages="routes.messages" />

        <!-- Localization -->
        <i18n-dropdown navbar />

        <!-- User Dropdown -->
        <b-nav-item-dropdown
          v-b-tooltip.hover.bottom="{ title: $t('Account') }"
          right>
          <template slot="button-content">
            <fmv-avatar 
              :title="true"
              title-class="bg-primary"
              size="sm" 
              circle
              no-link>
              <md-icon>account_box</md-icon>
            </fmv-avatar>
          </template>
          <b-dropdown-header 
            tag="div"
            class="form-label">
            {{ $t('Manage') }}
          </b-dropdown-header>
          <b-dropdown-item :to="routeTo(routes.editAccount)">
            {{ $t('Edit Account') }}
          </b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.editAccountProfile)">
            {{ $t('Profile & Privacy') }}
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item :to="routeTo(routes.studentProfile)">
            <md-icon>person</md-icon> {{ $t('Public Profile') }}
          </b-dropdown-item>
          <b-dropdown-item :to="routeTo(routes.logout || routes.login)">
            <md-icon>lock</md-icon> {{ $t('Logout') }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- // END User dropdown -->

      </template>

    </b-navbar-nav>
    <!-- // END Menu -->

  </div>
</template>

<i18n>
  {
    "en": {
      "notifications": {
        "profile_sync_error": "Your profile information has not been synced correctly.",
        "user_wants_to_join": "<strong>{user}</strong> wants to join you.",
        "deploy_success": "Your deploy was successful."
      }
    },
    "ro": {
      "Earnings": "Încasări",
      "Sales": "Vânzări",
      "notifications": {
        "profile_sync_error": "Informațiile tale de profil nu au fost sincronizate corect.",
        "user_wants_to_join": "<strong>{user}</strong> vrea să ți se alăture.",
        "deploy_success": "Implementarea ta a avut succes."
      },
      "System notifications": "Notificări",
      "Messages": "Mesaje"
    }
  }
</i18n>

<script>
  // import {
  //   NavbarNotifications, 
  //   MdIcon, 
  //   i18nDropdown
  // } from 'vue-luma'
  
  import NavbarNotifications from './Notifications.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import i18nDropdown from '~/components/Ui/i18nDropdown.vue'
  import {FmvAvatar} from 'fmv-avatar'

  import teacherBrandImage from '~/static/images/illustration/teacher/128/white.svg'
  import studentBrandImage from '~/static/images/illustration/student/128/white.svg'

  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      NavbarNotifications,
      MdIcon,
      i18nDropdown,
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      navbarType: {
        type: String,
        default: () => 'light'
      },
      navbarContentContainerClass: {
        type: [String, Array, Object],
        default: () => 'd-flex w-100 align-items-center'
      },
      navbarFullSampleGuestMode: {
        type: Boolean
      },
      navbarBrand: {
        type: String,
        default: () => 'Brand'
      },
      brandImage: {
        type: String,
        default() {
          return this.isInstructor ? teacherBrandImage : studentBrandImage
        }
      },
      navbarBrandClass: {
        type: [String, Object, Array],
        default: () => null
      },
      navbarSearch: {
        type: Boolean,
        default: () => true
      },
      navbarStats: {
        type: Boolean,
        default: () => true
      }
    },
    data() {
      return {
        isInstructor: null,
        notifications: [
          {
            id: 1,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.min', 3, { value: 3 })
            }),
            iconClass: 'text-danger',
            icon: 'account_circle',
            message: this.$t('notifications.profile_sync_error'),
            unread: true
          },
          {
            id: 2,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.hr', 5, { value: 5 })
            }),
            iconClass: 'text-success',
            icon: 'group_add',
            message: this.$t('notifications.user_wants_to_join', {
              user: 'Adrian. D'
            }),
            unread: true
          },
          {
            id: 3,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.day', 1, { value: 1 })
            }),
            iconClass: 'text-warning',
            icon: 'storage',
            message: this.$t('notifications.deploy_success')
          }
        ],
        messages: [
          {
            id: 1,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.min', 3, { value: 3 })
            }),
            iconClass: 'text-danger',
            avatar: '/images/people/110/woman-5.jpg',
            name: 'Michelle',
            message: 'Clients loved the new design.',
            unread: true
          },
          {
            id: 2,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.hr', 5, { value: 5 })
            }),
            iconClass: 'text-success',
            avatar: '/images/people/110/woman-5.jpg',
            name: 'Michelle',
            message: '🔥 Superb job..'
          }
        ]
      }
    },
    computed: {
      isNavbarDark() {
        let some = [
          this.navbarType.indexOf('dark') !== -1,
          this.navbarType.indexOf('black') !== -1,
        ]
        return some.some(some => !!some)
      },
      ctaClass() {
        return this.isNavbarDark ? 'outline-white' : 'outline-dark'
      }
    },
    methods: {
      setIsInstructor() {
        let path = ''
        try {
          path = window ? window.location.pathname : this.$route.path
        }
        catch (e) {}
        this.isInstructor = path.indexOf('instructor') !== -1
      },
    },
    watch: {
      '$route.path': {
        immediate: true,
        handler: 'setIsInstructor'
      }
    },
    beforeMount() {
      document.addEventListener('inertia:success', () => this.setIsInstructor())
    },
    destroyed() {
      document.removeEventListener('inertia:success', () => this.setIsInstructor())
    },
  }
</script>
