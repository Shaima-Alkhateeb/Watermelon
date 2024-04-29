<!-- App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import TheScrollToTop from './components/layout/TheScrollToTop.vue';
</script>

<template>
  <TheHeader />
  <RouterView />
  <the-scroll-to-top></the-scroll-to-top>
  <the-footer></the-footer>
  <!-- <TheFooter /> -->
</template>
