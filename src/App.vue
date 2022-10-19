<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="title">
    <button class="menu"><fa icon="fa-solid fa-ellipsis" /></button>
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
    grid-area: title;

    button.menu {
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