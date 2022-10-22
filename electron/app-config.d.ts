declare namespace Global {
  export interface AppSetting {
    config: string
    width: number
    height: number
  }

  export interface UserSetting {
    textColor: string
    titleBar: {
      activeBackground: string
      activeForeground: string
      inactiveBackground: string
      inactiveForeground: String
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
