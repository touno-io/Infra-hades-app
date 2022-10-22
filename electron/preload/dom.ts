export const domReady = (condition: DocumentReadyState[] = ['complete', 'interactive']) => {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

export const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find((e) => e === child)) {
      return parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find((e) => e === child)) {
      return parent.removeChild(child)
    }
  },
}

export const createPreloading = (user: Global.UserSetting): { append(): void; remove(): void } => {
  // const rootTheme: string = ''
  /**
   * https://tobiasahlin.com/spinkit
   * https://connoratherton.com/loaders
   * https://projects.lukehaas.me/css-loaders
   * https://matejkustec.github.io/SpinThatShit
   */
  const className = `logo-menu`
  const styleContent = `
:root {
  --system-titleBar-height: 1.65em;
  --user-text-color: ${user.textColor};
  --user-background-color: ${user.backgroundColor};
}

body {
  --user-titlebar-foreground: ${user.titlebar.activeForeground};
  --user-titlebar-background: ${user.titlebar.activeBackground};
}
body.inactive {
  --user-titlebar-foreground: ${user.titlebar.inactiveForeground};
  --user-titlebar-background: ${user.titlebar.inactiveBackground};
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes loader {
  0% { box-shadow: 0 40px 0 var(--user-titlebar-foreground); }
  100% { box-shadow: 0 20px 0 var(--user-titlebar-foreground); }
}
.fade-out { animation: fadeOut .3s both; }
.fade-in { animation: fadeIn .3s both; }

.${className}, .${className}:after, .${className}:before  {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 40px 0 var(--user-titlebar-foreground);
  animation: loader 0.8s ease-in-out alternate infinite;
}
.${className}:after, .${className}:before {
  content: '';
  position: absolute;
}

.${className} {
  position: relative;
  animation-delay: 0.32s;
  transform: scale(0.2);
}
.${className}:after {
  right: -30px;
  animation-delay: 0.16s;
}
.${className}:before {
  left: -30px;
  animation-delay: 0.48s;
}
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--user-titlebar-background);
  z-index: 9;
}
    `
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = 'loading-style'
  oStyle.innerHTML = styleContent
  oDiv.id = 'loading'
  oDiv.className = 'wrap'
  oDiv.innerHTML = `<div class="${className}"></div>`

  return {
    append() {
      safeDOM.append(document.head, oStyle)
      safeDOM.append(document.body, oDiv)
      document.addEventListener('readystatechange', this.remove)
    },
    remove() {
      oDiv.classList.add('fade-out')
      setTimeout(() => {
        safeDOM.remove(document.body, oDiv)
      }, 300)
    },
  }
}
