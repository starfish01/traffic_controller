import router from './router.js'
import utils from './helpers/utilities'

require('./bootstrap')

Vue.prototype.$utils = utils

const app = new Vue({
  router,

}).$mount('#app')
