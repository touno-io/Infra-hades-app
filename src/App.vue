<script setup lang="ts">
import { ipcRenderer } from 'electron'
import HelloWorld from './components/HelloWorld.vue'

// const mouseTitleMoveEvent = async (e: MouseEvent) => {
//   const target = e.target as HTMLTextAreaElement
//   if (!e.isTrusted || !target || target.className !== 'title' || e.buttons !== 1) return e.preventDefault()
//   return ipcRenderer.invoke('title-move', {
//     clientX: e.clientX,
//     clientY: e.clientY,
//     x: e.screenX,
//     y: e.screenY,
//     mouse: undefined
//   })
// }
// const mouseTitleToggleEvent = async (e: MouseEvent) => {
//   if (!e.isTrusted) return e.preventDefault()
//   return ipcRenderer.invoke('title-toggle', { 
//     clientX: e.clientX,
//     clientY: e.clientY,
//     x: e.screenX,
//     y: e.screenY,
//     mouse: e.buttons
//   })

// }
</script>

<template>
  <div class="title">
    <button class="menu" @click.prevent="ipcRenderer.invoke('open-menu')"><fa icon="fa-solid fa-ellipsis" /></button>
  </div>
  <div class="panel">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="static-public">
      Place static files into the <code>/public</code> folder
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  > .title {
    -webkit-app-region: drag;
    user-select: none;
    grid-area: title;
  
    button.menu {
      -webkit-app-region: no-drag !important;
      top: 0px;
      left: 0px;
      position: absolute;
      width: 45px;
      height: 30px;
      font-size: 1rem;
      color: var(--color-symbol);
      background-color: transparent;
      border: none;

      > svg {
        margin-top: 7px;
      }
    }
    button.menu:hover {
      background-color: #3a3a3d;
    }
  }
  > .panel {
    grid-area: panel;
  }
}

</style>