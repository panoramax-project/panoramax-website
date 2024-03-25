<template>
  <main>
    <section class="section">
      <h1 class="use-cases-section-title">
        {{ $t('pages.useCases.main_title') }}
      </h1>
      <p class="main-description">
        {{ $t('pages.useCases.main_description') }}
      </p>
      <img
        src="@/assets/images/use-case.png"
        loading="lazy"
        :alt="$t('pages.useCases.alt_main_image')"
        class="img-use-cases"
      />
    </section>
    <section class="section">
      <h2 class="use-cases-section-title">
        {{ $t('pages.useCases.subtitle_use_cases') }}
      </h2>
      <ul class="use-cases-list">
        <li
          v-for="useCase in useCases"
          :key="useCase.title"
          class="use-case-item"
        >
          <UseCaseCard
            :title="useCase.title"
            :description="useCase.description"
            :image="useCase.image"
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import UseCaseCard from '@/components/UseCasesCard.vue'
import type { Image } from '@/interfaces/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
interface UseCaseData {
  title: string
  description: string
  image: Image
}

const useCases = <UseCaseData[]>[
  {
    title: t('pages.useCases.useCase_1.title'),
    description: t('pages.useCases.useCase_1.description'),
    image: {
      url: t('pages.useCases.useCase_1.image.url'),
      alt: t('pages.useCases.useCase_1.image.alt')
    }
  },
  {
    title: t('pages.useCases.useCase_2.title'),
    description: t('pages.useCases.useCase_2.description'),
    image: {
      url: t('pages.useCases.useCase_2.image.url'),
      alt: t('pages.useCases.useCase_2.image.alt')
    }
  },
  {
    title: t('pages.useCases.useCase_3.title'),
    description: t('pages.useCases.useCase_3.description'),
    image: {
      url: t('pages.useCases.useCase_3.image.url'),
      alt: t('pages.useCases.useCase_3.image.alt')
    }
  },
  {
    title: t('pages.useCases.useCase_4.title'),
    description: t('pages.useCases.useCase_4.description'),
    image: {
      url: t('pages.useCases.useCase_4.image.url'),
      alt: t('pages.useCases.useCase_4.image.alt')
    }
  }
]
</script>

<style scoped>
.section {
  padding: 3rem 15%;
}
.section:nth-child(even) {
  background-color: var(--white);
}
.section:nth-child(odd) {
  background-color: var(--grey);
}
.use-cases-section-title {
  font-family: SFPro-Bold;
  font-size: 2.8rem;
  color: var(--blue-dark);
  margin-bottom: 4rem;
}
.use-cases-list {
  display: flex;
  flex-wrap: wrap;
}
.use-case-item {
  flex: calc(50% - 10rem);
}
.use-case-item:nth-child(odd) {
  margin-right: 10rem;
}
.main-description {
  font-size: 1.4rem;
  color: var(--grey-dark);
  white-space: pre-line;
  margin-bottom: 2rem;
}
.img-use-cases {
  width: 100%;
  border-radius: 3rem;
}
@media (max-width: 1324px) {
  .section {
    padding: 3rem 10%;
  }
}
@media (max-width: 768px) {
  .section {
    padding: 2rem;
  }
  .use-case-item {
    flex: calc(50% - 2rem);
  }
  .use-case-item:nth-child(odd) {
    margin-right: 2rem;
  }
}
@media (max-width: 500px) {
  .use-cases-section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .main-description {
    font-size: 1.4rem;
  }
  .use-case-item {
    flex: 100%;
  }
}
</style>
