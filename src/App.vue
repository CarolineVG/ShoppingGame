<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import components, classes, ... here 
import StartScreen from './components/StartScreen.vue'

</script>

<template>
  
  <RouterView />

  <!-- show start screen -->
  <!-- show game screen -->

  <!-- show build screen -->

  <!-- show end screen -->
   
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
