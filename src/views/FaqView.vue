<template>
  <main class="page-faq">
    <h1 class="main-title">{{ $t('pages.faq.title') }}</h1>
    <section class="section">
      <h2 class="title">{{ $t('pages.faq.introduction_title') }}</h2>
      <p v-html="$t('pages.faq.introduction_text')" class="summary-text"></p>
    </section>
    <section>
      <ExpandableBlock
        v-for="faq in faqs"
        :title="faq.title"
        :text="faq.text"
      />
    </section>
    <section class="section summary">
      <h2 class="title">{{ $t('pages.faq.summary_title') }}</h2>
      <p v-html="$t('pages.faq.summary_text')" class="summary-text"></p>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ExpandableBlock from '@/components/ExpandableBlock.vue'

const { tm } = useI18n()

interface FaqData {
  title: string
  text: string
}
const faqs = computed<FaqData[]>(() => tm('pages.faq.blocks'))
</script>

<style scoped>
.page-faq {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 20%;
}
.main-title {
  font-family: SFPro-Bold;
  font-size: 3.5rem;
  color: var(--blue-dark);
  line-height: 1;
  margin-bottom: 5rem;
}
.author-text {
  white-space: pre-wrap;
  font-style: italic;
}
.summary {
  padding: 2rem;
  border: 0.1rem solid var(--blue-dark);
}
.section {
  border-radius: 2rem;
  margin-bottom: 4rem;
}
.title {
  font-family: SFPro-SemiBold;
  font-size: 2.2rem;
  color: var(--blue-dark);
  margin-bottom: 2rem;
}
.summary-text {
  white-space: pre-wrap;
  font-size: 1.8rem;
  line-height: 1.5;
}
@media (max-width: 1324px) {
  .page-faq {
    padding-right: 10%;
    padding-left: 10%;
  }
}

@media (max-width: 768px) {
  .page-faq {
    padding-top: 6rem;
  }
  .main-title {
    font-size: 2rem;
  }
  .page-faq {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .summary-text {
    font-size: 1.4rem;
  }
}
</style>
