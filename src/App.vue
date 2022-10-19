<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="logo-box">
    <img class="logo vite" src="./assets/vite.svg" />
    <img class="logo electron" src="./assets/electron.svg" />
    <img class="logo vue" src="./assets/vue.svg" />
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="static-public">
    Place static files into the <code>/public</code> folder
    <img :src="'./node.png'" width="77" height="77" />
  </div>
</template>
