<template>
  <div class="flex flex-1 h-screen">
    <Sidebar />
    <main class="flex-1 bg-secondary-light py-4 px-8 overflow-auto">
      <router-view />
    </main>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
</script>
