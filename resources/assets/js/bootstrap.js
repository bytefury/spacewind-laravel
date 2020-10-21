import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import SpaceWind from '@bytefury/spacewind'

/**
 * Theme
 */
import theme from './components/theme'

window._ = require('lodash')
window.Vue = require('vue')

/**
 * Global css plugins
 */

Vue.use(SpaceWind, { theme })

/**
 * Base Components
 */
require('./components/base')

/**
 * Icon Components
 */
require('./components/icons')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true;

/**
 * Global plugins
 */

Vue.use(VueRouter)
Vue.use(Vuex)
