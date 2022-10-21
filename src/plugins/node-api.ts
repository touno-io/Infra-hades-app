declare namespace Global {
  export interface UserSetting {
    color: string
    titleBar: {
      activeBackground: string
      activeForeground: string
      inactiveBackground: string
      inactiveForeground: String
    },
    backgroundColor: string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $user: Global.UserSetting
  }
}

export const configGlobal = (user: Global.UserSetting) => ({
  install(app: any) {
    app.config.globalProperties.$user = user
  }
})


// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $user: 
//   }
// }

// ipcRenderer.on('main-process-message', (_event, ...args) => {
//   console.log('[Receive Main-process message]:', ...args)
// })

// lstat(cwd())
//   .then((stats) => {
//     console.log('[fs.lstat]', stats)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
