<template>
  <li class="entry-how-it-works">
    <div class="head">
      <img :src="img(props.image.url)" :alt="props.image.alt" class="image" />
      <h3 class="title">{{ props.title }}</h3>
    </div>
    <div
      v-for="text in props.description"
      :key="text"
      class="description-wrapper"
    >
      <img src="@/assets/images/check-icon.svg" alt="" class="check-icon" />
      <p class="description">
        {{ text }}
      </p>
    </div>
  </li>
</template>

<script lang="ts" setup>
import type { Image } from '@/components/ImageInterface'
interface Props {
  title: string
  description: string[]
  image: Image
}
const props = defineProps<Props>()

function img(name: string): string {
  return new URL(`../assets/images/${name}`, import.meta.url).toString()
}
</script>

<style scoped>
.entry-how-it-works {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  padding: 2rem;
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
.image {
  width: 6rem;
}
.title {
  font-family: SFPro-SemiBold;
  font-size: 2.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: var(--violet);
}
.description-wrapper {
  display: flex;
  margin-bottom: 1rem;
  color: var(--grey-dark);
}
.description {
  white-space: pre-line;
  font-size: 1.6rem;
}
.check-icon {
  height: 2rem;
  margin-right: 1rem;
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
    font-size: 1.8rem;
  }
  .entry-how-it-works {
    padding: 3rem;
  }
  .entry-how-it-works:last-child {
    margin-bottom: 0;
  }
  .head {
    flex-direction: row;
    justify-content: initial;
    margin-bottom: 1rem;
  }
  .image {
    margin-right: 1rem;
    width: 4rem;
  }
  .description {
    font-size: 1.2rem;
  }
}
@media (max-width: 500px) {
  .entry-how-it-works {
    padding: 2rem;
  }
}
</style>
