<template>
  <li class="entry-join-us">
    <h3 class="title">{{ props.title }}</h3>
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
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
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 2rem 2rem 4rem;
}
.entry-join-us:nth-child(2) {
  margin-left: 2rem;
  margin-right: 2rem;
}
.title {
  font-family: SourceSansPro-SemiBold;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  white-space: pre;
}

@media (max-width: 1024px) {
  .entry-join-us {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
}
@media (max-width: 500px) {
  .entry-join-us:nth-child(2) {
    margin-right: initial;
    margin-left: initial;
  }
}
</style>
