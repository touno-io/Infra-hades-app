import { ipcRenderer } from 'electron'
import { domReady, createPreloading } from './dom'
// import {
//   onWindowLoaded,
//   onWindowActive,
//   onWindowInactive,
// } from './event-window'

domReady()
  .then(() => {
    return ipcRenderer.invoke('init-config')
  })
  .then(({ user }: { user: Global.UserSetting }) => {
    const preload = createPreloading(user)
    window.onmessage = ({ data }: MessageEvent<{ payload: string }>) => {
      switch (data.payload) {
        case 'remove':
          preload.remove()
          break
      }
    }

    preload.append()
  })
