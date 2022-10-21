// @ts-ignore
import init from 'hades-app'
import { ipcRenderer } from 'electron'

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppLayout from './App.vue'
// import { App } from './env';

import { configGlobal } from './plugins/node-api'

import 'bootstrap/scss/bootstrap-grid.scss'
import './assets/scss/global.scss'
import './fontAwesome.ts'


Promise.all([
  init(),
  ipcRenderer.invoke('init-config'),
]).then(([, { user }]) => {
  console.log(user)
  postMessage({ payload: 'remove' }, '*')
  createApp(AppLayout)
    .use(configGlobal(user))
    .component('Fa', FontAwesomeIcon)
    .mount('#app')
}).catch((ex: Error) => {
  console.log(ex)
})

