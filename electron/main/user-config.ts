import { existsSync, mkdirSync, write } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { app } from 'electron'
import settings from 'electron-settings'
import { parse, stringify } from 'yaml'

export const userApp: App.Setting = {
  config: join(app.getPath('home'), '.infra')
}

if (!existsSync(userApp.config)) mkdirSync(userApp.config)
settings.configure({
  atomicSave: true,
  dir: userApp.config,
  fileName: 'settings.json',
  numSpaces: 2,
  prettify: true
})

export const initilizeConfig = async () => {
  const themeConfigFile = join(userApp.config, 'config.yaml')
  if (!existsSync(themeConfigFile)) {
    const configDefault: App.UserSetting = {
      color: '#4d78cc',
      backgroundColor: '#1c1c1f'
    }
    await writeFile(themeConfigFile, stringify(configDefault))
  }
  // const themefile = await readFile(themeConfigFile, { encoding: 'utf8' })
}

export const config = {
  width: 1160,
  height: 725,
  titleBar: {
    color: '#1c1c1f',
    symbolColor: '#4d78cc'
  }
}

export const themeExternal = (fileyaml: string) => {
  console.log('fileyaml: %s', fileyaml)
}

export const settingApp = ''
