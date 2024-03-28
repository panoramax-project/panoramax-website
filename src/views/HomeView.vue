<template>
  <main class="page-home">
    <section class="header-home">
      <div class="wrapper-title">
        <h1 class="main-title">
          {{ $t('pages.home.title') }}
        </h1>
        <p class="main-description">{{ $t('pages.home.description') }}</p>
        <Link
          :text="$t('pages.home.more_images_button')"
          look="button button--blue link-top"
          url="https://api.panoramax.xyz/"
          type="external"
          target="_blank"
        />
      </div>
      <img
        src="@/assets/images/person-taking-photo.jpg"
        :alt="$t('pages.home.illustration_alt')"
        loading="lazy"
        class="image-top-home"
      />
      <img
        src="@/assets/images/upload-person.jpg"
        :alt="$t('pages.home.illustration_alt')"
        loading="lazy"
        class="image-top-home"
      />
      <img
        src="@/assets/images/view.jpg"
        :alt="$t('pages.home.illustration_alt')"
        loading="lazy"
        class="image-top-home"
      />
    </section>
    <section class="home-section">
      <h2 class="home-section-title">
        {{ $t('pages.home.howItWorks_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.howItWorks_description') }}
      </p>
      <ol class="wrapper-list wrapper-how-it-works">
        <HowItWorks
          v-for="howItWork in howItWorks"
          :key="howItWork.title"
          :title="howItWork.title"
          :description="howItWork.description"
          :image="howItWork.image"
        />
      </ol>
    </section>
    <section class="home-section">
      <h2 class="home-section-title">
        {{ $t('pages.home.why_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.why_description') }}
      </p>
      <div class="entry-button">
        <Link
          :text="$t('pages.home.why_button')"
          look="button button--blue"
          url="/cas-d-usage"
        />
      </div>
    </section>
    <section class="home-section">
      <h2 class="home-section-title metrics-title">
        {{ $t('pages.home.metrics_title') }}
      </h2>
      <ol class="wrapper-list wrapper-metrics">
        <Metrics
          v-for="metric in stats"
          :key="metric.number"
          :number="metric.number"
          :text="metric.text"
          :description="metric.description"
        />
      </ol>
      <div class="entry-button">
        <Link
          :text="$t('pages.home.stats_button')"
          look="button button--blue"
          url="/stats"
        />
      </div>
    </section>
    <section class="home-section instances-section">
      <h2 class="home-section-title">
        {{ $t('pages.home.instance_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.instance_description') }}
      </p>
      <ol class="wrapper-list">
        <Instance
          url="https://panoramax.ign.fr/"
          :image="{
            url: 'ign-logo.svg',
            alt: $t('pages.home.instance_logo_ign_alt')
          }"
        />
        <Instance
          url="https://panoramax.openstreetmap.fr/"
          :image="{
            url: 'osm-logo.svg',
            alt: $t('pages.home.instance_logo_osm_alt')
          }"
        />
      </ol>
    </section>
    <section class="home-section catalogue-section">
      <h2 class="home-section-title">
        {{ $t('pages.home.discover_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.discover_description') }}
      </p>
      <div id="viewer" class="entry-viewer"></div>
      <p class="home-section-description home-section-description-catalogue">
        {{ $t('pages.home.discover_description_end') }}
      </p>
      <div class="entry-button catalogue">
        <Link
          :text="$t('pages.home.discover_more_images_button')"
          look="button button--blue"
          url="https://api.panoramax.xyz/"
          type="external"
          target="_blank"
        />
      </div>
    </section>
    <section class="home-section community-list">
      <h2 class="home-section-title">
        {{ $t('pages.home.community_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.community_description') }}
      </p>
      <ul class="wrapper-list">
        <li v-for="community in communities" :key="community.alt">
          <img
            :src="img(community.url)"
            :alt="community.alt"
            loading="lazy"
            class="logo-community"
          />
        </li>
      </ul>
    </section>
    <section class="home-section media-list">
      <h2 class="home-section-title">
        {{ $t('pages.home.media_title') }}
      </h2>
      <p class="home-section-description">
        {{ $t('pages.home.media_description') }}
      </p>
      <ul class="wrapper-list">
        <li v-for="media in medias" :key="media.alt">
          <a
            :href="media.link"
            target="_blank"
            rel="noopener"
            class="media-link"
          >
            <img
              :src="img(media.url)"
              :alt="media.alt"
              loading="lazy"
              class="logo-community"
            />
          </a>
        </li>
      </ul>
    </section>
    <section class="home-section">
      <div>
        <h2 class="home-section-title">
          {{ $t('pages.home.joinUs_title') }}
        </h2>
        <p class="home-section-description">
          {{ $t('pages.home.joinUs_description') }}
        </p>
        <ul class="wrapper-list">
          <li class="list-join-us">
            <JoinUs :title="joinUs_link.title">
              <div slot="content" class="wrapper-button">
                <img
                  src="@/assets/images/mail-icon.svg"
                  loading="lazy"
                  alt=""
                  class="image-mail"
                />
                <a href="mailto:panoramax@panoramax.fr" class="mail-link"
                  >panoramax@panoramax.fr</a
                >
              </div>
            </JoinUs>
          </li>
          <li v-for="joinUsButton in joinUsButtons" class="list-join-us">
            <JoinUs :key="joinUsButton.title" :title="joinUsButton.title">
              <div slot="content" class="wrapper-button">
                <div class="wrapper-content">
                  <div
                    v-if="joinUsButton.event_text_1"
                    class="wrapper-event-link"
                  >
                    <div>
                      <img
                        src="@/assets/images/calendar-icon.svg"
                        loading="lazy"
                        alt=""
                        class="image-mail"
                      />
                      <span>{{ joinUsButton.event_text_2 }}</span>
                    </div>
                    <div>
                      <span>{{ joinUsButton.event_text_1 }}</span>
                      <a
                        :href="joinUsButton.event_link_url"
                        target="_blank"
                        class="event-link"
                        >{{ joinUsButton.event_link_text }}</a
                      >
                    </div>
                  </div>
                  <Link
                    :text="joinUsButton.text"
                    :url="joinUsButton.url"
                    look="button button--blue"
                    type="external"
                    target="_blank"
                  />
                </div>
              </div>
            </JoinUs>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { Viewer } from 'geovisio'
import Link from '@/components/Link.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Metrics from '@/components/Metrics.vue'
import Instance from '@/components/Instance.vue'
import JoinUs from '@/components/JoinUs.vue'
import type { Image } from '@/interfaces/index'
import { getSecondMondayDate, formatNumber } from '../utils/index'

let viewer = ref()
let stats = ref<MetricsData[]>()
interface MetricsData {
  number: string
  text: string
  description: string
}
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
const { t, locale } = useI18n()

const howItWorks = computed((): HowItWorksData[] => {
  return [
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
})

const joinUs_link = computed((): { title: string } => {
  return {
    title: t('pages.home.joinUs_link.title')
  }
})
const joinUsButtons = computed((): joinUsData[] => {
  return [
    {
      title: t('pages.home.joinUs_button_1.title'),
      text: t('pages.home.joinUs_button_1.text'),
      url: t('pages.home.joinUs_button_1.url')
    },
    {
      title: t('pages.home.joinUs_button_2.title'),
      text: t('pages.home.joinUs_button_2.text'),
      url: t('pages.home.joinUs_button_2.url'),
      event_text_1: t('pages.home.joinUs_button_2.event_text_1'),
      event_text_2: t('pages.home.joinUs_button_2.event_text_2', {
        date: getSecondMondayDate()
      }),
      event_link_text: t('pages.home.joinUs_button_2.event_link_text'),
      event_link_url: t('pages.home.joinUs_button_2.event_link_url')
    }
  ]
})
const communities = computed((): Image[] => {
  return [
    {
      url: t('pages.home.community_logo_1.url'),
      alt: t('pages.home.community_logo_1.alt')
    },
    {
      url: t('pages.home.community_logo_2.url'),
      alt: t('pages.home.community_logo_2.alt')
    },
    {
      url: t('pages.home.community_logo_3.url'),
      alt: t('pages.home.community_logo_3.alt')
    },
    {
      url: t('pages.home.community_logo_4.url'),
      alt: t('pages.home.community_logo_4.alt')
    },
    {
      url: t('pages.home.community_logo_5.url'),
      alt: t('pages.home.community_logo_5.alt')
    },
    {
      url: t('pages.home.community_logo_6.url'),
      alt: t('pages.home.community_logo_6.alt')
    },
    {
      url: t('pages.home.community_logo_7.url'),
      alt: t('pages.home.community_logo_7.alt')
    }
  ]
})
const medias = computed((): Image[] => {
  return [
    {
      url: t('pages.home.media_logo_1.url'),
      alt: t('pages.home.media_logo_1.alt'),
      link: t('pages.home.media_logo_1.link')
    },
    {
      url: t('pages.home.media_logo_2.url'),
      alt: t('pages.home.media_logo_2.alt'),
      link: t('pages.home.media_logo_2.link')
    },
    {
      url: t('pages.home.media_logo_3.url'),
      alt: t('pages.home.media_logo_3.alt'),
      link: t('pages.home.media_logo_3.link')
    },
    {
      url: t('pages.home.media_logo_4.url'),
      alt: t('pages.home.media_logo_4.alt'),
      link: t('pages.home.media_logo_4.link')
    }
  ]
})

watchEffect(() => {
  const api = import.meta.env.VITE_API_URL
  if (viewer.value) {
    viewer.value = new Viewer(
      'viewer', // Div ID
      api,
      { picId: '7bde6d85-a442-4f1b-bd87-86197157b8f0', lang: locale.value }
    )
  }
})
onMounted(async () => {
  const api = import.meta.env.VITE_API_URL
  viewer.value = new Viewer(
    'viewer', // Div ID
    api,
    { picId: '7bde6d85-a442-4f1b-bd87-86197157b8f0', lang: locale.value }
  )
  const data = await fetch(`${api}stats/`)
  const jsonData = await data.json()
  stats.value = [
    {
      number: formatNumber(jsonData.generic_stats.nb_pictures),
      text: t('pages.home.metrics_1.text'),
      description: t('pages.home.metrics_1.description')
    },
    {
      number: formatNumber(
        jsonData.generic_stats.collections_length_km.toString()
      ),
      text: t('pages.home.metrics_2.text'),
      description: t('pages.home.metrics_2.description')
    },
    {
      number: formatNumber(jsonData.generic_stats.nb_contributors.toString()),
      text: t('pages.home.metrics_3.text'),
      description: t('pages.home.metrics_3.description')
    }
  ]
})

function img(name: string): string {
  return new URL(`../assets/images/${name}`, import.meta.url).toString()
}
</script>
<style scoped>
.page-home {
  padding-bottom: 5rem;
}
.header-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
}
.wrapper-title {
  color: var(--white);
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg, #0a1f69 -20%, rgba(10, 31, 105, 0) 100%);
  padding-left: 8%;
}

.main-title {
  font-size: 3.5rem;
  width: 60rem;
  margin-bottom: 2rem;
}
.main-description {
  width: 60rem;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.image-top-home {
  width: 33.33%;
  object-fit: contain;
}
.home-section {
  position: relative;
  border-radius: 4rem;
  padding: 0rem 8% 4rem;
}
section:nth-child(even) {
  padding-right: calc(8% + 6rem);
  padding-left: calc(8% + 6rem);
}
.catalogue-section {
  padding-right: calc(8% + 6rem);
  padding-left: calc(8% + 6rem);
}
.metrics-title {
  border-top: 0.1rem solid var(--grey);
}

.home-section-title {
  text-align: center;
  font-family: SFPro-Bold;
  font-size: 2.8rem;
  color: var(--blue-dark);
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 3rem;
}
.home-section-description {
  text-align: center;
  font-size: 1.6rem;
  color: var(--grey-dark);
  width: 50%;
  margin: 1rem auto 3rem;
}
.wrapper-list {
  display: flex;
  justify-content: center;
}
.wrapper-metrics {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.instances-section {
  background-color: var(--blue-dark);
  border-radius: 0;
  padding-bottom: 3rem;
}
.instances-section .home-section-description {
  color: var(--white);
}
.instances-section .home-section-title {
  color: var(--white);
  margin-bottom: 3rem;
}
.home-section-description-catalogue {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
.entry-viewer {
  border-radius: inherit;
  overflow: hidden;
  height: 50rem;
}
.entry-button {
  display: flex;
  justify-content: center;
}
.catalogue {
  border-bottom: 0.1rem solid var(--grey);
  padding-bottom: 3rem;
}
.wrapper-event-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.wrapper-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
}
.wrapper-button {
  display: flex;
  align-items: center;
  width: fit-content;
  color: var(--grey-dark);
}
.event-link {
  text-decoration: underline;
  color: var(--blue-dark);
  margin-left: 0.5rem;
}
.event-link:hover {
  background-color: transparent;
  text-decoration: none;
}
.mail-link {
  color: var(--grey-dark);
  font-size: 1.6rem;
  text-decoration: underline;
}
.mail-link:hover {
  background-color: transparent;
  text-decoration: underline;
}

.joinus-section .home-section-description {
  margin-top: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
.image-mail {
  height: 1.5rem;
  margin-right: 0.5rem;
}
.community-list .wrapper-list {
  border-bottom: 0.1rem solid var(--grey);
  padding-bottom: 3rem;
}
.community-list .home-section-title {
  margin-bottom: 2rem;
}
.community-list li {
  margin-right: 2rem;
  margin-left: 2rem;
  width: 16.66%;
}
.media-list li {
  margin-right: 2rem;
  margin-left: 2rem;
}
.media-link:hover {
  background-color: transparent;
  opacity: 0.6;
}
.logo-community {
  height: 6rem;
}
.list-join-us {
  width: 33%;
}
.list-join-us:nth-child(2) {
  margin-left: 2rem;
  margin-right: 2rem;
}
@media (max-width: 1024px) {
  .wrapper-list {
    flex-direction: column;
    align-items: center;
  }
  .instances-section .wrapper-list,
  .community-list .wrapper-list {
    flex-direction: row;
  }
  .list-join-us {
    width: 100%;
  }
  .media-list li {
    margin-top: 2rem;
  }
  .media-list li:first-child {
    margin-top: 0;
  }
}
@media (max-width: 768px) {
  .header-home {
    flex-direction: column;
  }
  .wrapper-title {
    background: linear-gradient(
      180deg,
      rgba(10, 31, 105, 0.6) 0%,
      rgba(10, 31, 105, 0) 100%
    );
  }
  .instances-section .wrapper-list,
  .community-list .wrapper-list {
    flex-direction: column;
  }
  .image-top-home {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  .main-title,
  .home-section-title {
    font-size: 2rem;
    padding-left: 0;
    padding-right: 0;
  }
  .main-description,
  .home-section-description,
  .wrapper-content {
    font-size: 1.2rem;
  }
  .main-title,
  .main-description {
    width: 100%;
  }
  .wrapper-title {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .home-section,
  section:nth-child(even),
  .catalogue-section {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .catalogue-section {
    padding-bottom: 0;
  }
  .home-section-description {
    width: 100%;
  }
  .entry-viewer {
    height: 35rem;
  }
  .community-list .wrapper-list {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .community-list .wrapper-list li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    margin: 0;
  }
  .logo-community {
    height: 5rem;
  }
  .list-join-us:nth-child(2) {
    margin-right: initial;
    margin-left: initial;
  }
}
</style>
