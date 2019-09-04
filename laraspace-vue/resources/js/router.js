import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Dashboard
import Basic from './views/admin/dashboard/Basic.vue'

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
import LayoutLogin from './views/layouts/LayoutLogin.vue'
import LayoutFront from './views/layouts/LayoutFront.vue'

// Basic UI
import Buttons from './views/admin/basic-ui/Buttons.vue'
import Cards from './views/admin/basic-ui/Cards.vue'
import Typography from './views/admin/basic-ui/Typography.vue'
import Tables from './views/admin/basic-ui/Tables.vue'
import ProgressBar from './views/admin/basic-ui/ProgressBars.vue'

// Components

// Charts
import Chartjs from './views/admin/charts/Chartjs.vue'

// Icons
import Fontawesome from './views/admin/icons/Fontawesome.vue'
import Fpsline from './views/admin/icons/FpsLine.vue'
import IcoMoon from './views/admin/icons/IcoMoon.vue'
import Line from './views/admin/icons/Line.vue'
import Meteo from './views/admin/icons/Meteo.vue'

// Users
import Users from './views/admin/users/Users.vue'
import Profile from './views/admin/users/Profile.vue'

// Settings
import Settings from './views/admin/Settings.vue'

/*
 |--------------------------------------------------------------------------
 | Other
 |--------------------------------------------------------------------------|
 */

// Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

import NotFoundPage from './views/errors/404.vue'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from './views/front/Home.vue'

Vue.use(VueRouter)

const routes = [

  /*
   |--------------------------------------------------------------------------
   | Frontend Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutFront,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Admin Backend Routes
   |--------------------------------------------------------------------------|
   */
  {
    path: '/admin',
    component: LayoutBasic, // Change the desired Layout here
    meta: { requiresAuth: true },
    children: [
      // Dashboard
      {
        path: 'dashboard/basic',
        component: Basic,
        name: 'dashboard'
      },

      // Basic UI
      {
        path: 'basic-ui/buttons',
        component: Buttons
      },
      {
        path: 'basic-ui/cards',
        component: Cards
      },
      {
        path: 'basic-ui/typography',
        component: Typography
      },
      {
        path: 'basic-ui/tables',
        component: Tables
      },

      {
        path: 'basic-ui/progress-bars',
        component: ProgressBar
      },


      // Charts
      {
        path: 'charts/chartjs',
        component: Chartjs
      },

      //  Icons
      {
        path: 'icons/fontawesome',
        component: Fontawesome
      },
      {
        path: 'icons/fpsline',
        component: Fpsline
      },
      {
        path: 'icons/icomoon',
        component: IcoMoon
      },
      {
        path: 'icons/line',
        component: Line
      },
      {
        path: 'icons/meteo',
        component: Meteo
      },

      // Users
      {
        path: 'users/profile',
        component: Profile
      },
      {
        path: 'users/all',
        component: Users
      },


      // Settings
      {
        path: 'settings',
        component: Settings
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Auth & Registration Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login,
        name: 'login'
      },
      {
        path: 'register',
        component: Register,
        name: 'register'
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

router.beforeEach((to, from, next) => {
  //  If the next route is requires user to be Logged IN
  if (to.matched.some(m => m.meta.requiresAuth)) {
    return AuthService.check().then(authenticated => {
      if (!authenticated) {
        return next({ path: '/login' })
      }

      return next()
    })
  }

  return next()
})

export default router
