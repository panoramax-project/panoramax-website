<template>
  <li class="entry-instance">
    <div class="wrapper-image">
      <img
        v-if="image && props.image.url"
        :src="img(props.image.url)"
        :alt="props.image.alt"
        loading="lazy"
        class="image"
      />
    </div>
    <div v-if="props.url" class="wrapper-links">
      <div class="link">
        <Link
          :text="$t('pages.home.instance_explore')"
          :url="props.url"
          type="external"
          target="_blank"
          look="link--blue"
        />
      </div>
      <div class="link">
        <Link
          :text="$t('pages.home.instance_contribute')"
          :url="`${props.url}pourquoi-contribuer`"
          type="external"
          target="_blank"
          look="link--blue"
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import Link from '@/components/Link.vue'
import type { Image } from '@/components/ImageInterface'
interface Props {
  url: string
  image: Image
}
const props = defineProps<Props>()

function img(name: string): string {
  return new URL(`../assets/images/${name}`, import.meta.url).toString()
}
</script>

<style scoped>
.entry-instance {
  border-radius: 1.5rem;
  background-color: var(--white);
  width: 50%;
}
.wrapper-image {
  padding: 3.5rem;
  display: flex;
  justify-content: center;
}
.image {
  height: 6rem;
}
.entry-instance:first-child {
  margin-right: 2rem;
}
.wrapper-links {
  display: flex;
}
.link {
  width: 50%;
  height: 6rem;
  display: flex;
  justify-content: center;
  background-color: var(--blue-ligth);
  font-weight: 700;
}
.link:first-child {
  background-color: var(--blue-semi-ligth);
  border-bottom-left-radius: 1.5rem;
}
.link:last-child {
  border-bottom-right-radius: 1.5rem;
}

@media (max-width: 768px) {
  .entry-instance {
    width: 100%;
  }
  .entry-instance:first-child {
    margin-bottom: 2rem;
    margin-right: 0;
  }
}
</style>
