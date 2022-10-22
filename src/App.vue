<script setup lang="ts">
import { ipcRenderer } from 'electron'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="title">
    <div class="bar d-flex position-relative align-items-stretch">
      <button class="menu" @click.prevent="ipcRenderer.invoke('open-menu')">
        <div class="logo-menu" />
      </button>
      <div class="logo d-flex align-items-center justify-content-center flex-fill">
        <img src="./assets/logo.svg" height="22" width="22" alt="Infar Hades" />
        <span class="text">Infra.Hades</span>
      </div>
    </div>
  </div>
  <div class="panel">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="static-public">Place static files into the <code>/public</code> folder</div>
  </div>
</template>

<style lang="scss">
#app {
  > .title {
    user-select: none;
    grid-area: title;

    .bar {
      -webkit-app-region: drag;
      gap: 4px;
      margin: -8px 0 0 -8px;
      width: 100%;
      height: 31px;
      background-color: var(--user-titlebar-active-background);

      &.inactive {
        background-color: var(--user-titlebar-inactive-background);
      }

      > .logo > .text {
        font-size: 0.75rem;
        font-family: Mulish;
        font-weight: 700;
      }

      button.menu {
        -webkit-app-region: no-drag !important;
        position: relative;
        width: 45px;
        color: var(--user-titlebar-active-foreground);
        background-color: var(--user-titlebar-active-background);
        border: none;

        *,
        ::after,
        ::before {
          animation: none !important;
        }

        > .logo-menu {
          transform: scale(0.16) translateX(40px) translateY(-20px);
        }

        &:hover {
          background-color: #ffffff1f;
        }
      }
    }
  }

  > .panel {
    grid-area: panel;
  }
}
</style>
