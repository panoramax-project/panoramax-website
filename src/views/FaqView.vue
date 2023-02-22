<template>
  <NavBar></NavBar>
  <main class="page-faq">
    <h1 class="main-title">{{ $t('pages.faq.title') }}</h1>
    <section>
      <ExpandableBlock
        v-for="faq in faqs"
        :title="faq.title"
        :text="faq.text"
      />
      <div class="entry-summary">
        <h2 class="title">{{ $t('pages.faq.summary_title') }}</h2>
        <p v-html="$t('pages.faq.summary_text')" class="summary-text"></p>
      </div>
      <p class="author-text">{{ $t('pages.faq.authors') }}</p>
    </section>
  </main>
  <div class="entry-footer">
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
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
  padding: 10rem 12%;
}
.main-title {
  font-family: SourceSansPro-Bold;
  font-size: 5rem;
  color: var(--violet-dark);
  line-height: 1;
  margin-bottom: 5rem;
}
.entry-footer {
  padding: 0px 15rem;
}
.author-text {
  white-space: pre-wrap;
  font-style: italic;
}
.entry-summary {
  border: 0.1rem solid var(--violet);
  padding: 2rem;
  border-radius: 2rem;
  margin-bottom: 4rem;
}
.title {
  font-family: SourceSansPro-SemiBold;
  font-size: 2.2rem;
  color: var(--blue-dark);
  margin-bottom: 2rem;
}
.summary-text {
  font-size: 1.8rem;
  line-height: 1.5;
}
@media (max-width: 1324px) {
  .page-faq,
  .entry-footer {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}

@media (max-width: 768px) {
  .page-faq {
    padding-top: 6rem;
  }
  .main-title {
    font-size: 3rem;
  }
  .page-faq,
  .entry-footer {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
