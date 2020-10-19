import Vue from 'vue'
import VueRouter from 'vue-router'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
import LayoutLogin from './views/layouts/LayoutLogin.vue'

// Dashbord
import Dashboard from './views/dashboard/Dashboard.vue'

// basic-ui
import Cards from './views/basic-ui/Cards.vue'
import Tabs from './views/basic-ui/Tabs.vue'
import Typography from './views/basic-ui/Typography.vue'
import Tables from './views/basic-ui/Table.vue'
import Modals from './views/basic-ui/Modals.vue'

// form
import Buttons from './views/form/Buttons.vue'
import GeneralElements from './views/form/GeneralElements.vue'
import AdvancedElements from './views/form/AdvancedElements.vue'
import FormLayout from './views/form/FormLayout.vue'

// components
import Badges from './views/components/Badges.vue'
import List from './views/components/List.vue'
import FileUpload from './views/components/FileUpload.vue'
import Dropdown from './views/components/Dropdown.vue'
import Editors from './views/components/Editors.vue'
import Wizards from './views/components/Wizards.vue'
import Popup from './views/components/Popup.vue'

// Auth
import Login from './views/auth/Login.vue'

import NotFoundPage from './views/errors/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutLogin,
    meta: { redirectIfAuthenticated: true },
    children: [
      {
        path: '/',
        component: Login
      }
    ]
  },
  {
    path: '/admin',
    component: LayoutBasic,
    meta: { requiresAuth: true },
    children: [
      // Dashboard
      {
        path: '/',
        component: Dashboard,
        name: 'dashboard'
      },
      {
        path: 'basic-ui/cards',
        component: Cards
      },
      {
        path: 'basic-ui/modals',
        component: Modals
      },
      {
        path: 'basic-ui/tables',
        component: Tables
      },
      {
        path: 'basic-ui/tabs',
        component: Tabs
      },
      {
        path: 'basic-ui/tabs',
        component: Tabs
      },
      {
        path: 'basic-ui/typography',
        component: Typography
      },

      // form
      {
        path: 'form/buttons',
        component: Buttons
      },
      {
        path: 'form/general-elements',
        component: GeneralElements
      },
      {
        path: 'form/advanced-elements',
        component: AdvancedElements
      },
      {
        path: 'form/form-layout',
        component: FormLayout
      },

      // components
      {
        path: 'components/list',
        component: List
      },
      {
        path: 'components/badges',
        component: Badges
      },
      {
        path: 'components/file-upload',
        component: FileUpload
      },
      {
        path: 'components/editors',
        component: Editors
      },
      {
        path: 'components/dropdown',
        component: Dropdown
      },
      {
        path: 'components/wizards',
        component: Wizards
      },
      {
        path: 'components/popup',
        component: Popup
      }
    ]
  },
  //  DEFAULT ROUTE
  { path: '*', component: NotFoundPage }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
