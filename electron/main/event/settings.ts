import { screen } from 'electron'
import { BrowserWindow } from 'electron'
import settings from 'electron-settings'
import { debounce } from '../../helper'

const eventSetPosition = (win: BrowserWindow) => {
  let [winX, winY] = win.getPosition()
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const [winWidth, winHeight] = win.getSize()
  if (winX < 0) winX = 0
  if (winX > width - winWidth) winX = width - winWidth
  if (winY < 0) winY = 0
  if (winY > height - winHeight) winY = height - winHeight
  // settings.set('position', { x: winX, y: winY })
  const config = {
    maximized: win.isMaximized(),
    width: winWidth,
    height: winHeight,
    x: winX,
    y: winY,
  }

  console.log(config)
  if (config.maximized) {
    settings.set('position.maximized', config.maximized)
  } else {
    settings.set('position', config)
  }
}

export const onWindowPositionEvent = (win: BrowserWindow) => debounce(() => eventSetPosition(win), 200)
