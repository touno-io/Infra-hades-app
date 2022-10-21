import { domReady, createPreloading } from './dom'

const preload = createPreloading()
window.onmessage = ({ data }: MessageEvent<{ payload: string }>) => {
  switch (data.payload) {
    case 'remove': preload.remove(); break;
  }
}

domReady().then(() => {
  document.body.style.backgroundColor = '#1c1c1f'
  preload.append()
  setTimeout(preload.remove, 3000)
})

