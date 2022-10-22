declare namespace Global {
  export interface AppSetting {
    config: string
    width: number
    height: number
  }

  export interface UserSetting {
    textColor: string
    backgroundColor: string
    titlebar: {
      activeBackground: string
      activeForeground: string
      inactiveBackground: string
      inactiveForeground: string
    }
  }
}

interface SettingPosition {
  maximized: boolean
  width: number
  height: number
  x: number
  y: number
}
