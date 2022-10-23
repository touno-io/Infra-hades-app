<script lang="ts" setup>
import HelloWorld from '../components/HelloWorld.vue'
const dataText = ['Data1', 'data2', 'data3']
</script>

<template>
  <div class="container-fluid">
    <div class="navbar py-3 px-4">Dashboard</div>
    <div class="recent-event">
      <div class="header">Recent event</div>
      <div v-for="(item, i) of dataText" :key="i" class="item">
        {{ item }}
      </div>
    </div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="static-public">Place static files into the <code>/public</code> folder</div>
  </div>
</template>
