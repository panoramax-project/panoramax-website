<template>
  <a
    v-if="type === 'external'"
    :href="props.url"
    :target="target"
    rel="noopener"
    :class="['default', look]"
  >
    <slot name="image"></slot>
    <span v-if="props.text.length">{{ props.text }}</span>
  </a>
  <router-link v-else :to="props.url" :class="['default', look]"
    ><slot name="image"></slot>
    <span v-if="props.text.length">{{ props.text }}</span></router-link
  >
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  look: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.default {
  font-weight: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 100%;
}
.default:hover {
  opacity: 0.8;
  background-color: transparent;
}
.button {
  border: none;
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  width: fit-content;
}
.link--blue {
  color: var(--blue-dark);
}
.link--white {
  color: var(--white);
}
.button--blue {
  background-color: var(--violet);
  color: var(--white);
}
.button:hover {
  color: var(--white);
  background-color: var(--blue-dark);
}

@media (max-width: 500px) {
  .button {
    font-size: 1.6rem;
  }
}
</style>
