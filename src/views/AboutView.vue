<template>
  <main class="page-about">
    <h1 class="main-title">{{ $t('pages.about.title') }}</h1>
    <div class="wrapper-introduction">
      <div class="wrapper-image-top">
        <img
          src="@/assets/images/carousel-street-view.jpg"
          :alt="$t('pages.home.illustrationAlt')"
          class="image-top-about"
        />
        <div class="credit-wrapper">
          <p class="credit-title">Crédit IGN - 2022</p>
        </div>
      </div>
      <p class="introduction" v-html="$t('pages.about.introduction')"></p>
    </div>
    <section class="section">
      <article v-for="article in aboutData" class="article">
        <div class="wrapper-title">
          <img
            v-if="article.icon"
            :src="article.icon.url"
            :alt="article.icon.alt"
            class="icon-image"
          />
          <h2 class="article-title" v-if="article.subtitle">
            {{ article.subtitle }}
          </h2>
        </div>
        <p class="article-text" v-html="article.text"></p>
        <img
          v-if="article.image"
          :src="article.image.url"
          :alt="article.image.alt"
          class="article-image"
        />
      </article>
    </section>
    <section class="section">
      <article class="article-team">
        <h2 class="article-title">{{ $t('pages.about.subtitle_team') }}</h2>
        <ul class="team-list">
          <li v-for="team in teamData" class="team-list-item">
            <img
              :src="team.image_url"
              :alt="team.image_alt"
              class="team-image"
            />
            <span class="team-name">{{ team.name }}</span>
            <span class="team-work">{{ team.work }}</span>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { Image } from '@/components/ImageInterface'

interface ArticleData {
  subtitle: string
  text: string
  icon: Image
  image?: Image
}
interface TeamData {
  name: string
  work: string
  image_url: string
  image_alt: string
}
const { t } = useI18n()

const aboutData = <ArticleData[]>[
  {
    image: {
      url: t('pages.about.image_1.url'),
      alt: t('pages.about.image_1.alt')
    },
    subtitle: t('pages.about.subtitle_1'),
    text: t('pages.about.text_1')
  },
  {
    icon: {
      url: t('pages.about.icon_2.url'),
      alt: t('pages.about.icon_2.alt')
    },
    subtitle: t('pages.about.subtitle_2'),
    text: t('pages.about.text_2')
  },
  {
    icon: {
      url: t('pages.about.icon_3.url'),
      alt: t('pages.about.icon_3.alt')
    },
    subtitle: t('pages.about.subtitle_3'),
    text: t('pages.about.text_3')
  },
  {
    icon: {
      url: t('pages.about.icon_4.url'),
      alt: t('pages.about.icon_4.alt')
    },
    subtitle: t('pages.about.subtitle_4'),
    text: t('pages.about.text_4')
  }
]

const teamData = <TeamData[]>[
  {
    name: t('pages.about.team.member_1.name'),
    work: t('pages.about.team.member_1.work'),
    image_url: t('pages.about.team.member_1.image_url'),
    image_alt: t('pages.about.team.member_1.image_alt')
  },
  {
    name: t('pages.about.team.member_2.name'),
    work: t('pages.about.team.member_2.work'),
    image_url: t('pages.about.team.member_2.image_url'),
    image_alt: t('pages.about.team.member_2.image_alt')
  },
  {
    name: t('pages.about.team.member_3.name'),
    work: t('pages.about.team.member_3.work'),
    image_url: t('pages.about.team.member_3.image_url'),
    image_alt: t('pages.about.team.member_3.image_alt')
  },
  {
    name: t('pages.about.team.member_4.name'),
    work: t('pages.about.team.member_4.work'),
    image_url: t('pages.about.team.member_4.image_url'),
    image_alt: t('pages.about.team.member_4.image_alt')
  },
  {
    name: t('pages.about.team.member_5.name'),
    work: t('pages.about.team.member_5.work'),
    image_url: t('pages.about.team.member_5.image_url'),
    image_alt: t('pages.about.team.member_5.image_alt')
  },
  {
    name: t('pages.about.team.member_6.name'),
    work: t('pages.about.team.member_6.work'),
    image_url: t('pages.about.team.member_6.image_url'),
    image_alt: t('pages.about.team.member_6.image_alt')
  }
]
</script>

<style scoped>
.page-about {
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
.wrapper-image-top {
  width: 60%;
}
.image-top-about {
  border-radius: 4rem;
  object-fit: cover;
  height: 30rem;
  width: 100%;
}
.wrapper-introduction {
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
}
.introduction {
  width: 40%;
  font-size: 2rem;
  padding-left: 4rem;
  padding-bottom: 0;
  white-space: pre-wrap;
}
.article {
  padding: 4rem;
  border-radius: 2rem;
  margin-bottom: 4rem;
}
.article-team {
  margin-top: 2rem;
}
.article:nth-child(odd) {
  background-color: var(--blue-ligth);
}
.article-title {
  font-family: SourceSansPro-SemiBold;
  font-size: 2.4rem;
}
.article-image {
  margin-top: 3rem;
  border-radius: 4rem;
  height: 60rem;
  width: 100%;
  object-fit: cover;
}
.article-text {
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
}
.team-list {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
}
.team-list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 5rem;
  margin-right: 2rem;
  border: 0.1rem solid var(--violet-dark);
  border-radius: 2rem;
  width: calc(33% - 1.1rem);
  margin-bottom: 2rem;
}
.team-list-item:nth-child(3),
.team-list-item:nth-child(6) {
  margin-right: 0;
}
.team-image {
  margin-bottom: 3rem;
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  text-align: center;
  object-fit: cover;
}
.team-name {
  font-family: SourceSansPro-SemiBold;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  text-align: center;
}
.team-work {
  font-size: 1.6rem;
}
.credit-wrapper {
  position: absolute;
  background-color: var(--white);
  min-width: 10rem;
  padding: 1rem 1rem 0.5rem;
  border-radius: 1rem;
  right: 2rem;
  bottom: 2rem;
  text-align: left;
}
.credit-title {
  font-family: SourceSansPro-SemiBold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.wrapper-title {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.icon-image {
  height: 4rem;
  margin-right: 1rem;
}
@media (max-width: 1624px) {
  .wrapper-introduction {
    flex-direction: column;
    align-items: initial;
  }
  .image-top-about {
    height: 40rem;
  }
  .wrapper-image-top {
    width: 100%;
  }
  .introduction {
    margin-top: 4rem;
    padding-right: 4rem;
    width: 100%;
  }
  .team-list-item {
    width: calc(50% - 1.1rem);
  }
  .team-list-item:nth-child(3),
  .team-list-item:nth-child(6) {
    margin-right: 2rem;
  }
  .team-list-item:nth-child(2),
  .team-list-item:nth-child(4),
  .team-list-item:nth-child(6) {
    margin-right: 0;
  }
}
@media (max-width: 1324px) {
  .page-about {
    padding-right: 20rem;
    padding-left: 20rem;
  }
}
@media (max-width: 1024px) {
  .page-about {
    padding-right: 10rem;
    padding-left: 10rem;
  }
  .team-list-item:nth-child(3) {
    margin-right: 2rem;
  }
  .team-list-item:nth-child(2),
  .team-list-item:nth-child(4) {
    margin-right: 0;
  }
  .image-top-about {
    height: 30rem;
  }
}
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
  .page-about {
    padding: 6rem 2rem;
  }
  .introduction,
  .article {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
@media (max-width: 500px) {
  .team-list-item,
  .team-list-item:nth-child(3) {
    width: 100%;
    margin-right: 0;
  }
  .page-about {
    padding-right: 0;
    padding-left: 0;
  }
  .article-team,
  .main-title {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .image-top-about,
  .article {
    border-radius: 0;
  }
  .article {
    margin-bottom: 2rem;
  }
}
</style>
