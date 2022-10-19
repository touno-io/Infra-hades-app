// @ts-ignore
// eslint-disable-next-line
import init, { greet } from 'hades-app';

import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'

init().then(() => {
  greet('wsam from Rust!')

  return createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
})

