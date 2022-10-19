// @ts-ignore
import init from 'hades-app'

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import './samples/node-api'
import 'bootstrap/scss/bootstrap-grid.scss'
import './assets/scss/global.scss'
import './fontAwesome.ts'

postMessage({ payload: 'removeLoading' }, '*')

init().then(() => {
  createApp(App)
    .component('Fa', FontAwesomeIcon)
    .mount('#app')
}).catch(ex => {
  console.log(ex)
})

