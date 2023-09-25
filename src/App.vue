<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
