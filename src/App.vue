<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeadBar from './components/HeadBar.vue';
</script>

<template>
  <HeadBar />
  <RouterView />
</template>

<style scoped>

@media (max-width: 600px) {}
@media (min-width: 601px) and (max-width: 768px) {}
@media (min-width: 769px) and (max-width: 900px) {}
@media (min-width: 901px) and (max-width: 1024px) {}
@media (min-width: 1025px) {}
</style>
