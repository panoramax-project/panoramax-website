<template>
  <div class="number-wrapper">
    <h3 class="number">{{ number }}</h3>
    <span class="text-number">{{ $t('pages.stats.chart_line_desc') }}</span>
  </div>
  <p v-html="textDesc" class="stats-desc" />
</template>

<script setup>
const props = defineProps({
  number: {
    type: String,
    default: null
  },
  textDesc: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.number-wrapper {
  color: var(--blue-dark);
  font-family: SFPro-Heavy;
  margin-bottom: 2rem;
}
.number {
  font-size: 4rem;
}
.text-number {
  font-size: 1.4rem;
}
.stats-desc {
  white-space: pre-wrap;
}
</style>
