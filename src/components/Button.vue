<template>
  <a
    v-if="type === 'external'"
    :href="props.url"
    target="_blank"
    rel="noopener"
    :class="['button', look]"
  >
    {{ props.text }}
  </a>
  <router-link v-else :to="props.url" :class="['button', look]">{{
    props.text
  }}</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  look: {
    type: String,
    default: 'blue'
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.button {
  border: none;
  width: 100%;
  min-width: 20rem;
  border-radius: 6rem;
  background-color: var(--yellow);
  padding: 1.2rem 3.5rem 1.2rem 3.5rem;
  font-size: 1.8rem;
  text-decoration: none;
  text-align: center;
}
.blue {
  background-color: var(--violet);
  color: var(--white);
}
.yellow {
  color: var(--violet-dark);
  background-color: var(--yellow);
}
.button:hover {
  color: var(--white);
  background-color: var(--violet-dark);
}
</style>
