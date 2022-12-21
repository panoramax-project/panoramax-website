<template>
  <NavBar></NavBar>
  <main class="page-about">
    <h1 class="main-title">{{ $t('pages.about.title') }}</h1>
    <img
      src="@/assets/images/immersive-view-street.jpg"
      :alt="$t('pages.home.illustrationAlt')"
      class="image-top-about"
    />
    <section class="section">
      <p class="introduction">{{ t('pages.about.introduction') }}</p>
      <article v-for="article in aboutData" class="article">
        <h2 class="article-title">{{ article.subtitle }}</h2>
        <p class="article-text">{{ article.text }}</p>
      </article>
    </section>
  </main>
  <div class="entry-footer">
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

interface ArticleData {
  subtitle: string
  text: string
}
const { t } = useI18n()

const aboutData = <ArticleData[]>[
  {
    subtitle: t('pages.about.subtitle_1'),
    text: t('pages.about.text_1')
  },
  {
    subtitle: t('pages.about.subtitle_2'),
    text: t('pages.about.text_2')
  }
]
</script>

<style scoped>
.page-about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 30rem;
}
.main-title {
  text-align: center;
  font-family: SourceSansPro-Bold;
  font-size: 5rem;
  color: var(--violet-dark);
  line-height: 1;
  margin-bottom: 4rem;
}
.image-top-about {
  border-radius: 4rem;
  object-fit: cover;
  height: 40rem;
}
.introduction {
  font-family: SourceSansPro-SemiBold;
  font-size: 1.8rem;
  padding: 6rem 4rem 0;
}
.article {
  padding: 4rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
}
.article:nth-child(odd) {
  background-color: var(--blue-ligth);
}
.article-title {
  font-family: SourceSansPro-SemiBold;
  font-size: 2.4rem;
  margin-bottom: 2rem;
}
.article-text {
  font-size: 1.6rem;
  line-height: 1.5;
}
.entry-footer {
  padding: 0px 15rem;
}
@media (max-width: 1324px) {
  .page-about {
    padding-right: 20rem;
    padding-left: 20rem;
  }
  .entry-footer {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
@media (max-width: 1024px) {
  .page-about {
    padding-right: 10rem;
    padding-left: 10rem;
  }
  .image-top-about {
    height: 30rem;
  }
}
@media (max-width: 768px) {
  .page-about {
    padding-top: 6rem;
  }
  .main-title {
    font-size: 3rem;
  }
  .page-about {
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 6rem;
  }
  .introduction,
  .article {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .entry-footer {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
