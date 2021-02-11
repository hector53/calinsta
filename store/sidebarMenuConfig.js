export const studentRoutes = ({routes}) => [{
  label: 'Home',
  route: routes.home,
  icon: { 
    type: 'md-icon', 
    id: 'home' 
  }
}, {
  label: 'Browse Courses',
  route: routes.studentCourses, 
  icon: { 
    type: 'md-icon', 
    id: 'local_library' 
  }
}, {
  label: 'Browse Paths',
  route: routes.studentPaths, 
  icon: { 
    type: 'md-icon', 
    id: 'style' 
  }
}, {
  label: 'Student Dashboard',
  route: routes.studentDashboard,
  icon: { 
    type: 'md-icon', 
    id: 'account_box' 
  }
}, {
  label: 'My Courses',
  route: routes.studentMyCourses,
  icon: { 
    type: 'md-icon', 
    id: 'search' 
  }
}, {
  label: 'My Paths',
  route: routes.studentMyPaths,
  icon: { 
    type: 'md-icon', 
    id: 'timeline' 
  }
}, {
  label: 'Path Details',
  route: routes.studentPath,
  icon: { 
    type: 'md-icon', 
    id: 'change_history' 
  }
}, {
  label: 'View Course',
  route: routes.studentCourse,
  icon: { 
    type: 'md-icon', 
    id: 'face' 
  }
}, {
  label: 'View Lesson',
  route: routes.studentLesson,
  icon: { 
    type: 'md-icon', 
    id: 'panorama_fish_eye' 
  }
}, {
  label: 'Take Course',
  route: routes.studentTakeCourse,
  icon: { 
    type: 'md-icon', 
    id: 'class' 
  },
  badge: { 
    label: 'PRO', 
    variant: 'accent badge-notifications' 
  }
}, {
  label: 'Take Lesson',
  route: routes.studentTakeLesson,
  icon: { 
    type: 'md-icon', 
    id: 'import_contacts' 
  }
}, {
  label: 'Take Quiz',
  route: routes.studentTakeQuiz,
  icon: { 
    type: 'md-icon', 
    id: 'dvr' 
  }
}, {
  label: 'My Quizzes',
  route: routes.studentMyQuizzes,
  icon: { 
    type: 'md-icon', 
    id: 'poll' 
  }
}, {
  label: 'Quiz Result',
  route: routes.studentQuizResult,
  icon: { 
    type: 'md-icon', 
    id: 'live_help' 
  }
}, {
  label: 'Skill Assessment',
  route: routes.studentSkillAssessment,
  icon: { 
    type: 'md-icon', 
    id: 'layers' 
  }
}, {
  label: 'Skill Result',
  route: routes.studentSkillResult,
  icon: { 
    type: 'md-icon', 
    id: 'assignment_turned_in' 
  }
}]

export const instructorRoutes = ({routes}) => [{ 
  label: 'Instructor Dashboard', 
  route: routes.instructorDashboard,
  icon: { 
    type: 'md-icon', 
    id: 'school' 
  }
}, {
  label: 'Manage Courses',
  route: routes.instructorCourses,
  icon: { 
    type: 'md-icon', 
    id: 'import_contacts' 
  }
}, {
  label: 'Manage Quizzes',
  route: routes.instructorQuizzes,
  icon: { 
    type: 'md-icon', 
    id: 'help' 
  }
}, {
  label: 'Earnings',
  route: routes.instructorEarnings,
  icon: { 
    type: 'md-icon', 
    id: 'trending_up' 
  }
}, {
  label: 'Statement',
  route: routes.instructorStatement,
  icon: { 
    type: 'md-icon', 
    id: 'receipt' 
  }
}, {
  label: 'Edit Course',
  route: routes.instructorEditCourse,
  icon: { 
    type: 'md-icon', 
    id: 'post_add' 
  }
}, {
  label: 'Edit Quiz',
  route: routes.instructorEditQuiz,
  icon: { 
    type: 'md-icon', 
    id: 'format_shapes' 
  }
}]

export const accountRoutes = ({routes}) => [
  { label: 'Pricing', route: routes.pricing }, 
  { label: 'Login', route: routes.login }, 
  { label: 'Sign Up', route: routes.signup }, 
  { label: 'Forgot Password', route: routes.forgotPassword }, 
  { label: 'Change Password', route: routes.changePassword }, 
  { label: 'Edit Account', route: routes.editAccount }, 
  { label: 'Profile & Privacy', route: routes.editAccountProfile }, 
  { label: 'Email Notifications', route: routes.editAccountNotifications}, 
  { label: 'Subscription', route: routes.billing }, 
  { label: 'Upgrade Account', route: routes.billingUpgrade }, 
  { label: 'Payment Information', route: routes.billingPayment }, 
  { label: 'Payment History', route: routes.billingHistory }, 
  { label: 'Invoice', route: routes.billingInvoice }
]

export const communityRoutes = ({routes}) => [
  { label: 'Browse Teachers', route: routes.teachers }, 
  { label: 'Student Profile', route: routes.studentProfile }, 
  { label: 'Instructor Profile', route: routes.instructorProfile }, 
  { label: 'Blog', route: routes.blog }, 
  { label: 'Blog Post', route: routes.blogPost }, 
  { label: 'FAQ', route: routes.faq }, 
  { label: 'Help Center', route: routes.helpCenter }, 
  { label: 'Discussions', route: routes.discussions }, 
  { label: 'Discussion Details', route: routes.discussion }, 
  { label: 'Ask Question', route: routes.askQuestion}
]

export const studentMenu = (...args) => {
  return {
    id: 'studentMenu',
    label: 'Student',
    icon: {
      type: 'md-icon',
      id: 'account_box'
    },
    children: studentRoutes(...args)
  }
}

export const instructorMenu = (...args) => {
  return {
    id: 'instructorMenu',
    label: 'Instructor',
    icon: {
      type: 'md-icon',
      id: 'school'
    },
    children: instructorRoutes(...args)
  }
}

export const communityMenu = (...args) => {
  return {
    id: 'communityMenu',
    label: 'Community',
    icon: {
      type: 'md-icon',
      id: 'people_outline'
    },
    children: communityRoutes(...args)
  }
}

export const accountMenu = (...args) => {
  return {
    id: 'account',
    label: 'Account',
    icon: {
      type: 'md-icon',
      id: 'person_outline'
    },
    children: accountRoutes(...args)
  }
}

export const messagingMenu = ({routes}) => {
  return {
    label: 'Messages',
    route: routes.messages,
    icon: {
      type: 'md-icon',
      id: 'comment'
    },
    badge: {
      label: '3',
      variant: 'accent badge-notifications'
    }
  }
}

export const getters = {
  layoutMenu: (state, getters, rootState, rootGetters) => {
    const routes = rootGetters['settings/routes']

    return {

      student: studentRoutes({routes}),
      instructor: instructorRoutes({routes}),

      apps: [
        // studentMenu({routes}),
        // instructorMenu({routes}),
        messagingMenu({routes}),
        accountMenu({routes}),
        communityMenu({routes})
      ],

      components: [
        {
          id: 'appComponents',
          label: 'Application',
          icon: {
            type: 'md-icon',
            id: 'tune'
          },
          children: [
            { label: 'App Layout', route: routes.uiAppLayout },
            { label: 'Fixed Layout', route: routes.uiFixedLayout }
          ]
        },
        {
          id: 'uiComponents',
          label: 'User Interface',
          icon: {
            type: 'md-icon',
            id: 'tune'
          },
          children: [
            { label: 'Avatar', route: routes.uiAvatar },
            { label: 'Forms', route: routes.uiForms },
            { label: 'Form Image Group', route: routes.uiFormImageGroup },
            { label: 'Input Group Merge', route: routes.uiInputGroupMerge },
            { label: 'Cards', route: routes.uiCards },
            { label: 'Tabs', route: routes.uiTabs },
            { label: 'Icons', route: routes.uiIcons },
            { label: 'Alerts', route: routes.uiAlerts }
          ]
        },
        {
          id: 'layoutComponents',
          label: 'Layout',
          icon: {
            type: 'md-icon',
            id: 'tune'
          },
          children: [
            { label: 'Drawer', route: routes.uiDrawer },
            { label: 'Sidebar', route: routes.uiSidebar },
            { label: 'Sidebar Menu', route: routes.uiSidebarMenu },
            { label: 'Drawer Layout', route: routes.uiDrawerLayout },
            { label: 'Header', route: routes.uiHeader },
            { label: 'Header Layout', route: routes.uiHeaderLayout },
            { label: 'Perfect Scrollbar', route: routes.uiPerfectScrollbar }
          ]
        },
        {
          id: 'pluginComponents',
          label: 'Plugins',
          icon: {
            type: 'md-icon',
            id: 'folder'
          },
          children: [
            { label: 'Syntax Highlight', route: routes.uiSyntaxHighlight },
            { label: 'Line Chart', route: routes.uiChartLine },
            { label: 'Area Chart', route: routes.uiChartArea },
            { label: 'Bar Chart', route: routes.uiChartBar },
            { label: 'Doughnut Chart', route: routes.uiChartDoughnut },
            { label: 'Radar Chart', route: routes.uiChartRadar }
          ]
        }
      ]
    }  
  }
}

export const state = () => ({})
