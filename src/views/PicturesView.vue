<template>
  <div id="viewer" class="entry-viewer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Viewer } from 'geovisio'
let viewer = ref()
onMounted(() => {
  viewer.value = new Viewer(
    'viewer', // Div ID
    'https://api.panoramax.xyz/api'
  )
})
</script>

<style scoped>
.entry-viewer {
  height: calc(100vh - 22.8rem);
}
</style>
