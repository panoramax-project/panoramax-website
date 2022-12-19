<template>
  <li class="entry-how-it-works">
    <div class="head">
      <img :src="props.image.url" :alt="props.image.alt" class="image" />
      <h3 class="title">{{ props.title }}</h3>
    </div>
    <p class="description">{{ props.description }}</p>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Image } from '@/components/ImageInterface'
interface Props {
  title: string
  description: string
  image: Image
}
const props = defineProps<Props>()
</script>

<style scoped>
.entry-how-it-works {
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--violet-dark);
  border-radius: 2rem;
  padding: 5rem;
  width: 33%;
  background-color: var(--blue-ligth);
}
.entry-how-it-works:nth-child(2) {
  margin-right: 4rem;
  margin-left: 4rem;
}
.head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 6rem;
}
.title {
  font-family: SourceSansPro;
  text-align: center;
  font-size: 2.4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.description {
  white-space: pre-line;
  font-size: 1.6rem;
}
@media (max-width: 1024px) {
  .entry-how-it-works:nth-child(2) {
    margin-right: 0;
    margin-left: 0;
  }
  .entry-how-it-works {
    width: 100%;
    margin-bottom: 3rem;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  .entry-how-it-works {
    padding: 3rem;
  }
}
</style>
