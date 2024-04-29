<template>
    <div style="position: fixed; bottom: 20px; right: 20px;">
      <div class="arrow-background" v-show="showScrollButton" @click="scrollToTop">
        <i class="pi pi-arrow-up" style="font-size: 2rem; color: #10b981"></i>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const showScrollButton = ref(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const checkScrollPosition = () => {
    showScrollButton.value = window.scrollY > 1000;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition);
  });
  </script>
  
  <style scoped>
  .arrow-background {
    background-color: #e2e8f0ab;
    width: 50px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .arrow-background:hover {
    background-color: #e2e8f0;
  }
  </style>
  