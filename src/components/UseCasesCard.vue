<template>
  <div class="use-case-card">
    <div class="wrapper-icon-use-case">
      <img
        :src="img(props.image.url)"
        :alt="props.image.alt"
        loading="lazy"
        class="icon-use-case"
      />
    </div>
    <div>
      <h3 class="use-case-title">
        {{ props.title }}
      </h3>
      <p v-html="props.description" class="use-case-desc"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.wrapper-icon-use-case {
  border: 0.3rem solid var(--blue-dark);
  border-radius: 2rem;
  padding: 1rem;
  margin-right: 4rem;
  height: 8rem;
  width: fit-content;
  margin-bottom: 2rem;
}
.icon-use-case {
  height: 100%;
}
.use-case-card {
  margin-bottom: 4rem;
}
.use-case-title {
  margin-bottom: 1rem;
  font-family: SFPro-Bold;
}
.use-case-desc {
  font-size: 1.4rem;
  color: var(--grey-dark);
  white-space: pre-line;
}
@media (max-width: 500px) {
  .use-case-card {
    flex-direction: column;
    align-items: initial;
  }
  .wrapper-icon-use-case {
    margin-right: 0;
    margin-bottom: 2rem;
    width: fit-content;
  }
  .use-case-desc {
    font-size: 1.4rem;
  }
}
</style>
