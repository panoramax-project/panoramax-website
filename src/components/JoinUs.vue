<template>
  <div class="entry-join-us">
    <h3 class="title">{{ props.title }}</h3>
    <p v-if="props.description" class="description">
      {{ props.description }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.entry-join-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-ligth);
  border-radius: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 2rem;
  height: 100%;
}

.title {
  font-family: SFPro-SemiBold;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  white-space: pre;
  color: var(--violet);
}
.description {
  margin-bottom: 2rem;
  text-align: center;
}
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
}
</style>
