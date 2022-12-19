<template>
  <li class="entry-join-us">
    <h3 class="title">{{ props.title }}</h3>
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.entry-join-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  background-color: var(--blue-ligth);
  border-radius: 2rem;
  margin: 0 2rem 2rem;
  padding: 2rem 2rem 4rem;
}
.title {
  font-family: SourceSansPro-SemiBold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .entry-join-us {
    width: auto;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
}
</style>
