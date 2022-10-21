// @ts-ignore
import init from 'hades-app'
import { ipcRenderer } from 'electron'

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import './samples/node-api'
import 'bootstrap/scss/bootstrap-grid.scss'
import './assets/scss/global.scss'
import './fontAwesome.ts'


Promise.all([
  init(),
  ipcRenderer.invoke('init-config'),
]).then(() => {
  postMessage({ payload: 'removeLoading' }, '*')
  createApp(App)
    .component('Fa', FontAwesomeIcon)
    .mount('#app')
}).catch((ex: Error) => {
  console.log(ex)
})

