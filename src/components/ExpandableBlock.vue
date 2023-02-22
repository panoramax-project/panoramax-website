<template>
  <div :class="['entry-expandable', { 'is-open': isOpen }]">
    <button type="button" class="button-expandable" @click="isOpen = !isOpen">
      <h3 class="title">{{ props.title }}</h3>
      <img src="@/assets/images/chevron.png" class="image-chevron" />
    </button>
    <div class="article-wrapper">
      <p v-html="props.text" class="article-text"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  title: string
  text: string
}
const props = defineProps<Props>()
const isOpen = ref<boolean>(false)
</script>

<style scoped>
.entry-expandable {
  background-color: var(--blue-ligth);
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
.title {
  font-family: SourceSansPro-SemiBold;
  font-size: 2rem;
  color: var(--blue-dark);
  margin-right: 2rem;
}
.button-expandable {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
}
.article-text {
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
}
.article-wrapper {
  max-height: 0rem;
  transition: max-height, 0.7s;
}
.is-open .article-wrapper {
  transition: max-height, 0.7s;
  max-height: 100rem;
}
.is-open .image-chevron {
  transform: rotate(0deg);
  transition: transform, 0.2s;
}
.image-chevron {
  transform: rotate(180deg);
  transition: transform, 0.6s;
  height: 3rem;
}
.toto {
  list-style-position: inside;
  list-style-type: circle;
}
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
}
</style>
