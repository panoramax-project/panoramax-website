<template>
  <li class="entry-how-it-works">
    <div class="head">
      <div class="image-wrapper">
        <img :src="props.image.url" :alt="props.image.alt" class="image" />
      </div>
      <h3 class="title">{{ props.title }}</h3>
    </div>
    <div
      v-for="text in props.description"
      :key="text"
      class="description-wrapper"
    >
      <img src="@/assets/images/check-icon.png" alt="" class="check-icon" />
      <p class="description">
        {{ text }}
      </p>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Image } from '@/components/ImageInterface'
interface Props {
  title: string
  description: string[]
  image: Image
}
const props = defineProps<Props>()
</script>

<style scoped>
.entry-how-it-works {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  padding: 4rem;
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
}
.image-wrapper {
  padding: 1rem;
  background-color: var(--white);
  width: fit-content;
  border-radius: 50%;
}
.image {
  width: 6rem;
}
.title {
  font-family: SourceSansPro-SemiBold;
  font-size: 2.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.description-wrapper {
  display: flex;
  margin-bottom: 1rem;
}
.description {
  white-space: pre-line;
  font-size: 1.6rem;
}
.check-icon {
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
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
