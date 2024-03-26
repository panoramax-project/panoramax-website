<template>
  <div class="number-wrapper">
    <h3 class="number">{{ title }}</h3>
    <span v-if="subTitle" class="text-number">{{ subTitle }}</span>
  </div>
  <p v-html="textDesc" class="stats-desc" />
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  subTitle: {
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
  font-size: 3rem;
}
.text-number {
  font-size: 1.4rem;
}
.stats-desc {
  white-space: pre-wrap;
}
</style>
