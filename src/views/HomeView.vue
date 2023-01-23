<template>
  <NavBar></NavBar>
  <main class="page-home">
    <section class="header-home">
      <div class="wrapper-title">
        <h1 class="main-title">
          {{ $t('pages.home.title') }}
        </h1>
        <h2 class="main-title-second">
          {{ $t('pages.home.titleSecondPart') }}
        </h2>
      </div>
      <img
        src="@/assets/images/map-fr.png"
        :alt="$t('pages.home.illustrationAlt')"
        class="image-top-home"
      />
    </section>
    <section class="home-section">
      <h2 class="home-section-title">
        {{ $t('pages.home.howItWorksTitle') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.howItWorksDescription') }}
      </p>
      <ol class="wrapper-list">
        <HowItWorks
          v-for="howItWork in howItWorks"
          :key="howItWork.title"
          :title="howItWork.title"
          :description="howItWork.description"
          :image="howItWork.image"
        ></HowItWorks>
      </ol>
    </section>
    <section class="home-section">
      <div class="joinus-section">
        <h2 class="home-section-title">
          {{ $t('pages.home.joinUsTitle') }}
        </h2>
        <p class="home-section-description">
          {{ $t('pages.home.joinUsDescription') }}
        </p>
        <ul class="wrapper-list">
          <JoinUs :title="joinUsLink.title">
            <div slot="content" class="wrapper-button">
              <img src="@/assets/images/mail.png" alt="" class="image-mail" />
              <a href="mailto:panoramax@panoramax.fr" class="mail-link"
                >panoramax@panoramax.fr</a
              >
            </div>
          </JoinUs>
          <JoinUs
            v-for="joinUsButton in joinUsButtons"
            :key="joinUsButton.title"
            :title="joinUsButton.title"
          >
            <div slot="content" class="wrapper-button">
              <div class="wrapper-content">
                <div
                  v-if="joinUsButton.event_text_1"
                  class="wrapper-event-link"
                >
                  <span>{{ joinUsButton.event_text_1 }}</span>
                  <a
                    :href="joinUsButton.event_link_url"
                    target="_blank"
                    class="event-link"
                    >{{ joinUsButton.event_link_text }}</a
                  >
                  <span>{{ joinUsButton.event_text_2 }}</span>
                </div>
                <Button
                  :text="joinUsButton.text"
                  :url="joinUsButton.url"
                  look="yellow"
                  type="external"
                ></Button>
              </div>
            </div>
          </JoinUs>
        </ul>
      </div>
    </section>
    <section class="home-section">
      <h2 class="home-section-title">{{ $t('pages.home.subtitleImage') }}</h2>
      <Carousel class="home-carousel">
        <Slide :key="1">
          <img
            class="carousel__item"
            src="@/assets/images/carousel-geovisio.jpg"
            :alt="$t('pages.home.iconMailAlt')"
          />
          <div class="credit-wrapper">
            <p class="credit-title">Crédit Geovisio - 2022</p>
          </div>
        </Slide>
        <Slide :key="2">
          <img
            class="carousel__item"
            src="@/assets/images/carousel-street-view.jpg"
            :alt="$t('pages.home.iconMailAlt')"
          />
          <div class="credit-wrapper">
            <p class="credit-title">Crédit IGN - 2022</p>
          </div>
        </Slide>
        <Slide :key="3">
          <img
            class="carousel__item"
            src="@/assets/images/carousel-immersive-view-street.jpg"
            :alt="$t('pages.home.iconMailAlt')"
          />
          <div class="credit-wrapper">
            <p class="credit-title">Crédit Geovisio - 2022</p>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>
    <section class="home-section community-list">
      <h2 class="home-section-title">
        {{ $t('pages.home.communityTitle') }}
      </h2>
      <ul class="wrapper-list community-list">
        <li v-for="community in communities" :key="community.alt">
          <img
            :src="community.url"
            :alt="community.alt"
            class="logo-community"
          />
        </li>
      </ul>
    </section>
  </main>
  <div class="entry-footer">
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import HowItWorks from '@/components/HowItWorks.vue'
import JoinUs from '@/components/JoinUs.vue'
import Button from '@/components/Button.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import type { Image } from '@/components/ImageInterface'

interface HowItWorksData {
  title: string
  description: string[]
  image: Image
}
interface JoinUsEventData {
  event_text_1: string
  event_text_2: string
  event_link_text: string
  event_link_url: string
}
interface joinUsData extends Partial<JoinUsEventData> {
  title: string
  text: string
  url: string
}
const { t } = useI18n()

const howItWorks = <HowItWorksData[]>[
  {
    title: t('pages.home.howItWorks_1.title'),
    description: [
      t('pages.home.howItWorks_1.description_1'),
      t('pages.home.howItWorks_1.description_2'),
      t('pages.home.howItWorks_1.description_3')
    ],
    image: {
      url: t('pages.home.howItWorks_1.image.url'),
      alt: t('pages.home.howItWorks_1.image.alt')
    }
  },
  {
    title: t('pages.home.howItWorks_2.title'),
    description: [
      t('pages.home.howItWorks_2.description_1'),
      t('pages.home.howItWorks_2.description_2'),
      t('pages.home.howItWorks_2.description_3')
    ],
    image: {
      url: t('pages.home.howItWorks_2.image.url'),
      alt: t('pages.home.howItWorks_2.image.alt')
    }
  },
  {
    title: t('pages.home.howItWorks_3.title'),
    description: [
      t('pages.home.howItWorks_3.description_1'),
      t('pages.home.howItWorks_3.description_2'),
      t('pages.home.howItWorks_3.description_3')
    ],
    image: {
      url: t('pages.home.howItWorks_3.image.url'),
      alt: t('pages.home.howItWorks_3.image.alt')
    }
  }
]
const joinUsLink = <joinUsData>{
  title: t('pages.home.joinUsLink.title'),
  text: t('pages.home.joinUsLink.text'),
  url: t('pages.home.joinUsLink.url')
}
const joinUsButtons = <joinUsData[]>[
  {
    title: t('pages.home.joinUsButton_1.title'),
    text: t('pages.home.joinUsButton_1.text'),
    url: t('pages.home.joinUsButton_1.url')
  },
  {
    title: t('pages.home.joinUsButton_2.title'),
    text: t('pages.home.joinUsButton_2.text'),
    url: t('pages.home.joinUsButton_2.url'),
    event_text_1: t('pages.home.joinUsButton_2.event_text_1'),
    event_text_2: t('pages.home.joinUsButton_2.event_text_2'),
    event_link_text: t('pages.home.joinUsButton_2.event_link_text'),
    event_link_url: t('pages.home.joinUsButton_2.event_link_url')
  }
]
const communities = <Image[]>[
  {
    url: t('pages.home.communityLogo_1.url'),
    alt: t('pages.home.communityLogo_1.alt')
  },
  {
    url: t('pages.home.communityLogo_2.url'),
    alt: t('pages.home.communityLogo_2.alt')
  },
  {
    url: t('pages.home.communityLogo_3.url'),
    alt: t('pages.home.communityLogo_3.alt')
  },
  {
    url: t('pages.home.communityLogo_4.url'),
    alt: t('pages.home.communityLogo_4.alt')
  },
  {
    url: t('pages.home.communityLogo_5.url'),
    alt: t('pages.home.communityLogo_5.alt')
  },
  {
    url: t('pages.home.communityLogo_6.url'),
    alt: t('pages.home.communityLogo_6.alt')
  }
]
</script>
<style scoped>
.page-home {
  padding-bottom: 10rem;
}
.header-home {
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--blue-ligth);
  padding: 4rem 12%;
}
.wrapper-title {
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
}
.wrapper-button-top {
  width: fit-content;
  margin-top: 4rem;
}
.image-top-home {
  height: 100%;
  object-fit: contain;
  border-radius: 4rem;
  background-color: var(--violet);
}
.main-title {
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-family: SourceSansPro-Black;
  font-size: 7rem;
  color: var(--violet-dark);
  line-height: 1;
  margin-bottom: 1rem;
}
.main-title-second {
  font-family: SourceSansPro-SemiBold;
  font-size: 3rem;
  line-height: 1;
}
.home-section {
  position: relative;
  border-radius: 4rem;
  margin-top: 10rem;
  padding: 0rem 12%;
}
.home-section-title {
  text-align: center;
  font-family: SourceSansPro-Black;
  font-size: 3rem;
  color: var(--violet-dark);
  padding-right: 2rem;
  padding-left: 2rem;
}
.home-section-description {
  text-align: center;
  font-size: 1.8rem;
  width: 50%;
  margin: 1rem auto 3rem;
}
.wrapper-list {
  display: flex;
  justify-content: center;
}
.joinus-section {
  position: relative;
  border: 0.1rem solid var(--violet-dark);
  border-radius: 2rem;
  padding: 0 2rem 2rem;
}
.wrapper-event-link {
  margin-bottom: 1rem;
}
.wrapper-content {
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
}
.wrapper-button {
  display: flex;
  align-items: center;
  width: fit-content;
}
.event-link {
  text-decoration: underline;
  color: var(--violet-dark);
  margin-left: 0.5rem;
}
.event-link:hover {
  background-color: transparent;
  text-decoration: none;
}
.mail-link {
  color: var(--violet-dark);
  text-decoration: none;
  font-size: 1.8rem;
}
.mail-link:hover {
  background-color: transparent;
  text-decoration: underline;
}
.joinus-section .home-section-title {
  position: absolute;
  top: -2.5rem;
  right: 0;
  left: 0;
  margin: auto;
  background-color: var(--white);
  width: fit-content;
}
.joinus-section .home-section-description {
  margin-top: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
.image-mail {
  height: 3rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__viewport {
  border-radius: 4rem;
}
.credit-wrapper {
  position: absolute;
  background-color: var(--white);
  min-width: 15rem;
  padding: 1rem 1.5rem 0.5rem;
  border-radius: 1rem;
  right: 2rem;
  bottom: 5rem;
  text-align: left;
}
.credit-title {
  font-family: SourceSansPro-SemiBold;
  margin-bottom: 0.5rem;
}
.home-carousel ::v-deep(.carousel__next) {
  height: 8rem;
  width: 8rem;
  font-size: 8rem;
  color: var(--white);
}
.home-carousel ::v-deep(.carousel__prev) {
  height: 8rem;
  width: 8rem;
  font-size: 8rem;
  color: var(--white);
}
.home-carousel {
  margin-top: 2rem;
}
.community-list .home-section-title {
  margin-bottom: 2rem;
}
.community-list li {
  margin-right: 2rem;
  margin-left: 2rem;
}
.logo-community {
  height: 5rem;
}
.entry-footer {
  padding: 0px 12%;
}
@media (max-width: 1324px) {
  .header-home,
  .home-section,
  .entry-footer {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
@media (max-width: 1024px) {
  .header-home {
    height: initial;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
  .image-top-home {
    height: 30rem;
  }
  .wrapper-list {
    flex-direction: column;
    align-items: center;
  }
  .community-list {
    flex-direction: row;
  }
  .home-section-description {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .wrapper-title,
  .main-title,
  .main-title-second {
    width: 100%;
  }
  .main-title {
    font-size: 4rem;
  }
  .main-title-second {
    font-size: 2rem;
  }
  .image-top-home {
    display: none;
  }
  .header-home,
  .home-section,
  .entry-footer {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .home-section {
    margin-top: 6rem;
  }
  .home-section-title {
    font-size: 2.4rem;
  }
  .home-section-description {
    font-size: 1.5rem;
  }
  .logo-community {
    height: 4rem;
  }
  .community-list li {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
}
@media (max-width: 500px) {
  .wrapper-list {
    flex-wrap: wrap;
  }
}
</style>
