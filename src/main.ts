// @ts-ignore
import init from 'hades'

import { ipcRenderer } from 'electron'

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppLayout from './App.vue'
// import { App } from './env';

import { configGlobal } from './plugins/node-api'

import 'bootstrap/scss/bootstrap-grid.scss'
import './assets/css/fonts.css'
import './assets/scss/global.scss'
import './fontAwesome.ts'

const initMsg = async (msg: string) => {
  postMessage({ payload: 'init-msg', msg }, '*')
}

initMsg('Initialize Hades')
console.time('Initialize')
Promise.all([init(), ipcRenderer.invoke('init-config')])
  .then(([, { user }]) => {
    console.timeEnd('Initialize')
    console.log({ user })
    initMsg('Starting')
    createApp(AppLayout)
      .use(configGlobal(user))
      .component('Fa', FontAwesomeIcon)
      .mount('#app')
      .$nextTick(() => {
        postMessage({ payload: 'remove' }, '*')
      })
  })
  .catch((ex: Error) => {
    console.log(ex)
  })
