<template>
  <main class="entry-page">
    <h1 class="main-title">
      {{ $t('pages.pictures.title') }}
    </h1>
    <div id="viewer" class="entry-viewer"></div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Viewer } from 'geovisio'
let viewer = ref()
onMounted(() => {
  viewer.value = new Viewer(
    'viewer', // Div ID
    'https://api.panoramax.xyz/api',
    { map: { startWide: true, center: [3, 47], zoom: 3.5 } }
  )
})
</script>

<style scoped>
.entry-page {
  height: calc(100vh - 24.8rem);
  padding-top: 3rem;
}
.entry-viewer {
  height: calc(100% - 7rem);
}
.main-title {
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
}
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }
  .entry-page {
    height: calc(100vh - 31.65rem);
    padding-top: 1.5rem;
  }
}
</style>
