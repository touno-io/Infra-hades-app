import { existsSync, mkdirSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { app } from 'electron'
import settings from 'electron-settings'
import yaml from 'yaml'

interface Configuration {
  config: Global.AppSetting
  user: Global.UserSetting
}

const userDefault: Global.UserSetting = {
  textColor: '#e8e8e8',
  titleBar: {
    activeBackground: '#1c1c1f',
    activeForeground: '#004fe9',
    inactiveBackground: '#28282c',
    inactiveForeground: '#e8e8e8',
  },
}

const appDefault: Global.AppSetting = {
  config: join(app.getPath('home'), '.infra'),
  width: 1160,
  height: 725,
}

if (!existsSync(appDefault.config)) mkdirSync(appDefault.config)
settings.configure({
  atomicSave: true,
  dir: appDefault.config,
  fileName: 'settings.json',
  numSpaces: 2,
  prettify: true
})

export const initilizeApp = async () => {
  const themeConfigFile = join(appDefault.config, 'config.yaml')
  const configDefault: Configuration = {
    config: appDefault,
    user: userDefault
  }

  await writeFile(themeConfigFile, yaml.stringify(configDefault))
  // if (!existsSync(themeConfigFile)) {
  //   await writeFile(themeConfigFile, yaml.stringify(configDefault))
  // } else {
  //   const themefile = await readFile(themeConfigFile, { encoding: 'utf8' })
  //   configDefault = Object.assign(configDefault, yaml.parse(themefile))
  // }
  return configDefault
}

// export const config = {
//   width: 1160,
//   height: 725,
//   titleBar: {
//     color: '#1c1c1f',
//     symbolColor: '#0052ec'
//   }
// }

export const themeExternal = (fileyaml: string) => {
  console.log('fileyaml: %s', fileyaml)
}

export const settingApp = ''
