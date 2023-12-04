<template>
  <main>
    <section class="section">
      <h1 class="contribute-section-title">
        {{ $t('pages.contribute.main_title') }}
      </h1>
      <p class="main-description">
        {{ $t('pages.contribute.main_description') }}
      </p>
    </section>
    <section class="section">
      <h2 class="contribute-section-title">
        {{ $t('pages.contribute.subtitle_contribute') }}
      </h2>
      <ul class="list list-contribute">
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/contribute-character.svg"
            :alt="$t('pages.contribute.contribute_alt_photos')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.contribute_title_photos') }}
          </h3>
          <p class="contribute-desc">
            {{ $t('pages.contribute.contribute_desc_photos') }}
          </p>
        </li>
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/contribute-upload.svg"
            :alt="$t('pages.contribute.contribute_alt_upload')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.contribute_title_upload') }}
          </h3>
          <p class="contribute-desc">
            {{ $t('pages.contribute.contribute_desc_upload') }}
          </p>
        </li>
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/contribute-map.svg"
            :alt="$t('pages.contribute.contribute_alt_map')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.contribute_title_map') }}
          </h3>
          <p class="contribute-desc">
            {{ $t('pages.contribute.contribute_desc_map') }}
          </p>
        </li>
      </ul>
    </section>
    <section v-if="false" class="section">
      <h2 class="contribute-section-title">
        {{ $t('pages.contribute.subtitle_guide') }}
      </h2>
      <ul class="list guide-list">
        <li class="guide-list-item">
          <img
            src="@/assets/images/guide-img.jpg"
            :alt="$t('pages.contribute.guide_alt_img')"
            loading="lazy"
          />
          <div class="contribute-icon">
            <img
              src="@/assets/images/like-green.svg"
              :alt="$t('pages.contribute.guide_alt_like')"
              loading="lazy"
            />
          </div>
        </li>
        <li class="guide-list-item">
          <img
            src="@/assets/images/guide-img-saturated.jpg"
            :alt="$t('pages.contribute.guide_alt_img_saturated')"
            loading="lazy"
          />
          <div class="contribute-icon">
            <img
              src="@/assets/images/unlike-red.svg"
              :alt="$t('pages.contribute.guide_alt_unlike')"
              loading="lazy"
            />
          </div>
        </li>
      </ul>
      <p v-html="$t('pages.contribute.guide_desc')" class="contribute-desc"></p>
    </section>
    <section class="section">
      <h2 class="contribute-section-title">
        {{ $t('pages.contribute.subtitle_how_to_use') }}
      </h2>
      <ul class="list">
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/use.svg"
            :alt="$t('pages.contribute.use_alt_viewer')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.use_title_viewer') }}
          </h3>
          <p
            v-html="$t('pages.contribute.use_desc_viewer')"
            class="contribute-desc"
          />
        </li>
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/api.svg"
            :alt="$t('pages.contribute.use_alt_api')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.use_title_api') }}
          </h3>
          <p
            v-html="$t('pages.contribute.use_desc_api')"
            class="contribute-desc"
          />
        </li>
        <li class="list-item item-contribute">
          <img
            src="@/assets/images/detect.svg"
            :alt="$t('pages.contribute.use_alt_detect')"
            loading="lazy"
            class="contribute-img"
          />
          <h3 class="contribute-title">
            {{ $t('pages.contribute.use_title_detect') }}
          </h3>
          <p class="contribute-desc">
            {{ $t('pages.contribute.use_desc_detect') }}
          </p>
        </li>
      </ul>
    </section>
    <section class="section">
      <h2 class="contribute-section-title">
        {{ $t('pages.contribute.subtitle_how_to_contribute') }}
      </h2>
      <ul class="wrapper-list">
        <li class="list-how-contribute">
          <JoinUs
            :title="how_to_contribute_link.title"
            :description="how_to_contribute_link.description"
          >
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
        <li
          v-for="howToContribute in how_to_contribute_buttons"
          class="list-how-contribute"
        >
          <JoinUs
            :key="howToContribute.title"
            :title="howToContribute.title"
            :description="howToContribute.description"
          >
            <div slot="content" class="wrapper-button">
              <div class="wrapper-content">
                <div
                  v-if="howToContribute.event_text_1"
                  class="wrapper-event-link"
                >
                  <div>
                    <img
                      src="@/assets/images/calendar-icon.svg"
                      loading="lazy"
                      alt=""
                      class="image-mail"
                    />
                    <span>{{ howToContribute.event_text_2 }}</span>
                  </div>
                  <div>
                    <span>{{ howToContribute.event_text_1 }}</span>
                    <a
                      :href="howToContribute.event_link_url"
                      target="_blank"
                      class="event-link"
                      >{{ howToContribute.event_link_text }}</a
                    >
                  </div>
                </div>
                <Link
                  :text="howToContribute.text"
                  :url="howToContribute.url"
                  look="button button--blue"
                  type="external"
                  target="_blank"
                />
              </div>
            </div>
          </JoinUs>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import JoinUs from '@/components/JoinUs.vue'
import Link from '@/components/Link.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
interface HowToContributeEventData {
  event_text_1: string
  event_text_2: string
  event_link_text: string
  event_link_url: string
}
interface HowToContributeData extends Partial<HowToContributeEventData> {
  title: string
  text: string
  description: string
  url: string
}
const how_to_contribute_link = <HowToContributeData>{
  title: t('pages.contribute.how_to_contribute_link.title'),
  description: t('pages.contribute.how_to_contribute_link.description')
}
const how_to_contribute_buttons = <HowToContributeData[]>[
  {
    title: t('pages.contribute.how_to_contribute_button_1.title'),
    text: t('pages.contribute.how_to_contribute_button_1.text'),
    description: t('pages.contribute.how_to_contribute_button_1.description'),
    url: t('pages.contribute.how_to_contribute_button_1.url')
  },
  {
    title: t('pages.contribute.how_to_contribute_button_2.title'),
    text: t('pages.contribute.how_to_contribute_button_2.text'),
    description: t('pages.contribute.how_to_contribute_button_2.description'),
    url: t('pages.contribute.how_to_contribute_button_2.url')
  },
  {
    title: t('pages.contribute.how_to_contribute_button_3.title'),
    text: t('pages.contribute.how_to_contribute_button_3.text'),
    url: t('pages.contribute.how_to_contribute_button_3.url'),
    event_text_1: t('pages.contribute.how_to_contribute_button_3.event_text_1'),
    event_text_2: t('pages.contribute.how_to_contribute_button_3.event_text_2'),
    event_link_text: t(
      'pages.contribute.how_to_contribute_button_3.event_link_text'
    ),
    event_link_url: t(
      'pages.contribute.how_to_contribute_button_3.event_link_url'
    )
  }
]
</script>

<style scoped>
.section {
  padding: 3rem 10%;
}
.section:nth-child(even) {
  background-color: var(--white);
}
.section:nth-child(odd) {
  background-color: var(--grey);
}
.contribute-section-title {
  font-family: SFPro-Bold;
  font-size: 2.8rem;
  color: var(--blue-dark);
  margin-bottom: 2rem;
}

.list {
  display: flex;
}
.list-item {
  width: 33%;
}
.item-contribute:nth-child(2) {
  margin-right: 13%;
  margin-left: 13%;
}
.contribute-img {
  margin-bottom: 2rem;
}
.contribute-title {
  margin-bottom: 1rem;
  font-family: SFPro-Bold;
}
.main-description {
  font-size: 1.6rem;
  color: var(--grey-dark);
  white-space: pre-line;
}
.contribute-desc {
  font-size: 1.4rem;
  color: var(--grey-dark);
}
.guide-list {
  margin-bottom: 2rem;
}
.guide-list-item {
  width: 50%;
  height: fit-content;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
}
.guide-list-item img {
  width: 100%;
}
.guide-list-item:first-child {
  margin-right: 2rem;
}
.guide-list-item:nth-child(2) {
  margin-left: 2rem;
}
.contribute-icon {
  height: 6rem;
  width: 6rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contribute-icon img {
  height: 4.5rem;
  width: 4.5rem;
}
.wrapper-list {
  display: flex;
  justify-content: center;
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
.image-mail {
  height: 1.5rem;
  margin-right: 0.5rem;
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
.list-how-contribute {
  width: 25%;
}
.list-how-contribute:nth-child(4) {
  margin-left: 2rem;
}
.list-how-contribute:nth-child(2) {
  margin-left: 2rem;
  margin-right: 2rem;
}

@media (max-width: 1024px) {
  .wrapper-list {
    flex-direction: column;
  }
  .list-how-contribute {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .section {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .list-how-contribute:nth-child(2) {
    margin-right: initial;
    margin-left: initial;
  }
  .list {
    flex-direction: column;
    align-items: center;
  }
  .list-item {
    margin-bottom: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contribute-desc {
    text-align: center;
  }
  .contribute-img {
    height: 10rem;
  }
  .item-contribute:nth-child(2) {
    margin-right: 0;
    margin-left: 0;
  }
  .guide-list-item {
    width: 100%;
  }
  .guide-list-item:first-child {
    margin-right: 0;
    margin-bottom: 2rem;
  }
  .guide-list-item:nth-child(2) {
    margin-left: 0;
  }
  .section:nth-child(4) .list .list-item img {
    height: 8rem;
  }
  .contribute-section-title {
    font-size: 2rem;
    text-align: center;
  }
  .section:first-child .contribute-section-title {
    text-align: initial;
  }
  .main-description,
  .wrapper-content,
  .mail-link {
    font-size: 1.4rem;
  }
  .list-how-contribute:nth-child(4) {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
