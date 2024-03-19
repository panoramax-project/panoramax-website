<template>
  <li class="entry-metrics">
    <div class="number-wrapper">
      <span class="number">{{ props.number }}</span>
      <span class="text">{{ props.text }}</span>
    </div>
    <span>{{ props.description }}</span>
  </li>
</template>

<script setup lang="ts">
interface Props {
  number: string
  text: string
  description: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.entry-metrics {
  width: 33%;
}
.number-wrapper {
  color: var(--violet);
  font-family: SFPro-Heavy;
}
.number {
  font-size: 7rem;
  line-height: 8.4rem;
}
.text {
  font-size: 3rem;
}

@media (max-width: 1024px) {
  .entry-metrics {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .entry-metrics:nth-child(2) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .number {
    font-size: 5rem;
  }
  .text {
    font-size: 2.5rem;
  }
}
</style>
