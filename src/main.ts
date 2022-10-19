// eslint-disable-next-line
import init from 'hades-app';

import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'

init().then(() => {
  return createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
})

