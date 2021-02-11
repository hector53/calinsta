const _ = require('lodash')

export const state = () => ({
  ui: true,
  state: {
    layout: {
      layout: 'app',
      rtl: false
    },
    'app::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'fixed::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'sticky::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'boxed::mainDrawer': {
      align: 'start',
      sidebar: 'light'
    },
    'app::mainNavbar': {
      navbar: 'light'
    },
    'fixed::mainNavbar': {
      navbar: 'dark'
    },
    'sticky::mainNavbar': {
      navbar: 'light'
    },
    'boxed::mainNavbar': {
      navbar: 'dark'
    }
  }
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    if (settings) {
      state.state = _.merge({}, state.state, settings)
    }
  }
}

export const actions = {
  setSettings({ commit }, settings) {
    commit('SET_SETTINGS', settings)
  }
}

export const getters = {
  layout: state => state.state.layout.layout,
  routes: (state, getters) => {
    const layout = getters.layout
    return {
      billingHistory: {
        name: 'layout-billing-history', 
        params: {layout}
      },
      billingInvoice: {
        name: 'layout-billing-invoice', 
        params: {layout}
      },
      billingPayment: {
        name: 'layout-billing-payment', 
        params: {layout}
      },
      billingUpgrade: {
        name: 'layout-billing-upgrade', 
        params: {layout}
      },
      billing: {
        name: 'layout-billing', 
        params: {layout}
      },
      blogPost: {
        name: 'layout-blog-post', 
        params: {layout}
      },
      blog: {
        name: 'layout-blog',
        params: {layout}
      },
      changePassword: {
        name: 'layout-change-password', 
        params: {layout}
      },
      discussion: {
        name: 'layout-discussion',
        params: {layout}
      },
      askQuestion: {
        name: 'layout-discussions-ask', 
        params: {layout}
      },
      discussions: {
        name: 'layout-discussions',
        params: {layout}
      },
      editAccountNotifications: {
        name: 'layout-edit-account-notifications',
        params: {layout}
      },
      editAccountProfile: {
        name: 'layout-edit-account-profile',
        params: {layout}
      },
      editAccount: {
        name: 'layout-edit-account', 
        params: {layout}
      },
      faq: {
        name: 'layout-faq',
        params: {layout}
      },
      forgotPassword: {
        name: 'layout-forgot-password',
        params: {layout}
      },
      helpCenter: {
        name: 'layout-help-center', 
        params: {layout}
      },
      home: {
        name: 'layout-home',
        params: {layout}
      },
      instructorCourses: {
        name: 'layout-instructor-courses', 
        params: {layout}
      },
      instructorDashboard: {
        name: 'layout-instructor-dashboard', 
        params: {layout}
      },
      instructorEarnings: {
        name: 'layout-instructor-earnings', 
        params: {layout}
      },
      instructorEditCourse: {
        name: 'layout-instructor-edit-course',
        params: {layout}
      },
      instructorEditQuiz: {
        name: 'layout-instructor-edit-quiz',
        params: {layout}
      },
      instructorProfile: {
        name: 'layout-instructor-profile', 
        params: {layout}
      },
      instructorQuizzes: {
        name: 'layout-instructor-quizzes', 
        params: {layout}
      },
      instructorStatement: {
        name: 'layout-instructor-statement', 
        params: {layout}
      },
      login: {
        name: 'layout-login',
        params: {layout}
      },
      messages: {
        name: 'layout-messages',
        params: {layout}
      },
      pricing: {
        name: 'layout-pricing', 
        params: {layout}
      },
      signup: {
        name: 'layout-signup',
        params: {layout}
      },
      studentCourse: {
        name: 'layout-student-course', 
        params: {layout}
      },
      studentCourses: {
        name: 'layout-student-courses', 
        params: {layout}
      },
      studentDashboard: {
        name: 'layout-student-dashboard', 
        params: {layout}
      },
      studentLesson: {
        name: 'layout-student-lesson', 
        params: {layout}
      },
      studentMyCourses: {
        name: 'layout-student-my-courses',
        params: {layout}
      },
      studentMyPaths: {
        name: 'layout-student-my-paths',
        params: {layout}
      },
      studentMyQuizzes: {
        name: 'layout-student-my-quizzes',
        params: {layout}
      },
      studentPath: {
        name: 'layout-student-path', 
        params: {layout}
      },
      studentPaths: {
        name: 'layout-student-paths', 
        params: {layout}
      },
      studentProfile: {
        name: 'layout-student-profile', 
        params: {layout}
      },
      studentQuizResult: {
        name: 'layout-student-quiz-result',
        params: {layout}
      },
      studentSkillAssessment: {
        name: 'layout-student-skill-assessment',
        params: {layout}
      },
      studentSkillResult: {
        name: 'layout-student-skill-result',
        params: {layout}
      },
      studentTakeCourse: {
        name: 'layout-student-take-course',
        params: {layout}
      },
      studentTakeLesson: {
        name: 'layout-student-take-lesson',
        params: {layout}
      },
      studentTakeQuiz: {
        name: 'layout-student-take-quiz',
        params: {layout}
      },
      teachers: {
        name: 'layout-teachers',
        params: {layout}
      },
      uiAlerts: {
        name: 'layout-ui-alerts', 
        params: {layout}
      },
      uiAppLayout: {
        name: 'layout-ui-app-layout',
        params: {layout}
      },
      uiAvatar: {
        name: 'layout-ui-avatar', 
        params: {layout}
      },
      uiCards: {
        name: 'layout-ui-cards', 
        params: {layout}
      },
      uiChartArea: {
        name: 'layout-ui-chart-area',
        params: {layout}
      },
      uiChartBar: {
        name: 'layout-ui-chart-bar',
        params: {layout}
      },
      uiChartDoughnut: {
        name: 'layout-ui-chart-doughnut',
        params: {layout}
      },
      uiChartLine: {
        name: 'layout-ui-chart-line',
        params: {layout}
      },
      uiChartRadar: {
        name: 'layout-ui-chart-radar',
        params: {layout}
      },
      uiDrawerLayout: {
        name: 'layout-ui-drawer-layout',
        params: {layout}
      },
      uiDrawer: {
        name: 'layout-ui-drawer', 
        params: {layout}
      },
      uiFixedLayout: {
        name: 'layout-ui-fixed-layout',
        params: {layout}
      },
      uiFormImageGroup: {
        name: 'layout-ui-form-image-group',
        params: {layout}
      },
      uiForms: {
        name: 'layout-ui-forms', 
        params: {layout}
      },
      uiHeaderLayout: {
        name: 'layout-ui-header-layout',
        params: {layout}
      },
      uiHeader: {
        name: 'layout-ui-header', 
        params: {layout}
      },
      uiIcons: {
        name: 'layout-ui-icons', 
        params: {layout}
      },
      uiInputGroupMerge: {
        name: 'layout-ui-input-group-merge',
        params: {layout}
      },
      uiPerfectScrollbar: {
        name: 'layout-ui-perfect-scrollbar',
        params: {layout}
      },
      uiSidebarMenu: {
        name: 'layout-ui-sidebar-menu',
        params: {layout}
      },
      uiSidebar: {
        name: 'layout-ui-sidebar', 
        params: {layout}
      },
      uiSyntaxHighlight: {
        name: 'layout-ui-syntax-highlight',
        params: {layout}
      },
      uiTabs: {
        name: 'layout-ui-tabs', 
        params: {layout}
      },
    }
  }
}
