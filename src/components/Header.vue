<template>
  <header class="header">
    <nav class="nav">
      <div>
        <Link
          :text="$t('general.panoramax_title')"
          url="/"
          look="link--blue"
          class="instance-logo"
          @click.native="displayed = !displayed"
        >
          <template v-slot:image>
            <img
              src="@/assets/images/logo.jpg"
              alt=""
              loading="lazy"
              class="logo"
            />
          </template>
        </Link>
      </div>
      <ul :class="['header-list', { displayed }]">
        <li class="list-item dropdown instance-item">
          <span class="desktop">{{ $t('general.nav.photos') }}</span>
          <img
            src="@/assets/images/chevron.svg"
            loading="lazy"
            class="image-chevron"
          />
          <div class="dropdown-block instances-block">
            <div class="instance-item-link">
              <Link
                :text="$t('general.nav.all_pictures')"
                url="https://api.panoramax.xyz/"
                type="external"
                target="_blank"
                look="link--blue"
                @click.native="displayed = !displayed"
              >
                <template v-slot:image>
                  <img
                    src="@/assets/images/logo.jpg"
                    loading="lazy"
                    class="image-instance-link image-all-pictures"
                  />
                </template>
              </Link>
            </div>
            <div class="instance-item-link">
              <Link
                :text="$t('general.nav.instance_ign')"
                url="https://panoramax.ign.fr/"
                type="external"
                target="_blank"
                look="link--blue"
              >
                <template v-slot:image>
                  <img
                    src="@/assets/images/ign-logo.png"
                    loading="lazy"
                    class="image-instance-link"
                  />
                </template>
              </Link>
            </div>
            <div class="instance-item-link">
              <Link
                :text="$t('general.nav.instance_osm')"
                url="https://panoramax.openstreetmap.fr/"
                type="external"
                target="_blank"
                look="link--blue"
              >
                <template v-slot:image>
                  <img
                    src="@/assets/images/osm-logo.png"
                    loading="lazy"
                    class="image-instance-link"
                  />
                </template>
              </Link>
            </div>
          </div>
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.contribute')"
            url="comment-participer-a-panoramax"
            look="link--blue"
            @click.native="displayed = !displayed"
          />
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.use_cases')"
            url="cas-d-usage"
            look="link--blue"
            @click.native="displayed = !displayed"
          />
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.faq')"
            url="foire-aux-questions"
            look="link--blue"
            @click.native="displayed = !displayed"
          />
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.contact')"
            url="mailto:panoramax@panoramax.fr"
            type="external"
            look="link--blue"
          />
        </li>
      </ul>
      <div class="header-right">
        <button type="button" @click="displayed = !displayed" class="burger">
          <img src="@/assets/images/burger-icon.svg" loading="lazy" />
        </button>
        <div class="list-item dropdown instance-item">
          <img
            :src="formatLangUrl"
            loading="lazy"
            class="image-instance-link"
          />
          <span class="desktop">{{ locale.toUpperCase() }}</span>
          <img
            src="@/assets/images/chevron.svg"
            loading="lazy"
            class="image-chevron"
          />
          <div class="dropdown-block lang-block">
            <button
              v-for="lang in allLocales"
              @click.native="changeLocale(lang)"
              class="instance-item-link"
            >
              <img
                :src="formatLangListUrl(lang)"
                loading="lazy"
                class="image-instance-link"
              />
              <span>{{ lang.toUpperCase() }}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup scoped>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Link from '@/components/Link.vue'
const { locale, messages, t } = useI18n()
const displayed = ref<boolean>(true)
const formatLangUrl = computed(() =>
  new URL(`../assets/images/${locale.value}.png`, import.meta.url).toString()
)
const allLocales = computed(() => {
  let locales: string[] = []
  Object.keys(messages.value).forEach(function (key) {
    if (locale.value !== key) locales = [...locales, key]
  })
  return locales
})
function changeLocale(lang: string): void {
  locale.value = lang
  displayed.value = false
}
function formatLangListUrl(lang: string): string {
  return new URL(`../assets/images/${lang}.png`, import.meta.url).toString()
}
</script>
<style scoped>
.header {
  padding-right: 8%;
  padding-left: 8%;
  height: 7rem;
  border-bottom: 0.1rem solid var(--grey);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.burger {
  display: none;
}
.instance-logo {
  font-weight: 800;
  font-size: 1.8rem;
}
.logo {
  background: var(--violet);
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 3.5rem;
  margin-right: 1rem;
}
.header-list {
  display: flex;
  align-items: center;
}
.dropdown-block {
  display: none;
  position: absolute;
  z-index: 2;
  background-color: var(--white);
  border-radius: 0.5rem;
}
.instances-block {
  width: 22rem;
  top: 5.9rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
.lang-block {
  top: 5.5rem;
  width: fit-content;
  left: -1rem;
  padding: 0.5rem;
}
.instances-block div:nth-child(2) {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.image-instance-link {
  width: 2rem;
  margin-right: 0.5rem;
}
.image-all-pictures {
  background: var(--violet);
  padding: 0.2rem;
  border-radius: 0.5rem;
}
.instance-item {
  display: flex;
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  cursor: pointer;
  color: var(--blue-dark);
}
.image-chevron {
  margin-left: 0.5rem;
}
.list-item {
  font-size: 1.6rem;
  margin-right: 2rem;
}
.list-item:last-child {
  margin-right: 0;
}
.dropdown:hover > .dropdown-block {
  display: block;
}
.dropdown:hover > .image-chevron {
  transform: rotate(180deg);
}
.instance-item-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
  border: none;
  cursor: pointer;
}
.header-right {
  display: flex;
  align-items: center;
}
@media (max-width: 1324px) {
  .header {
    padding: 0;
  }
  .nav {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
@media (max-width: 1024px) {
  .nav {
    position: relative;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .burger {
    display: block;
    background-color: transparent;
    border: none;
  }
  .header-list {
    position: absolute;
    right: 0;
    left: 0;
    top: 5.5rem;
    width: 100%;
    background-color: var(--white);
    z-index: 2;
    flex-direction: column;
    align-items: flex-start;
    display: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  }
  .displayed {
    display: flex;
    padding: 2rem;
  }
  .instances-block {
    display: block;
    position: initial;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    justify-content: initial;
    align-items: initial;
    width: initial;
  }
  .instance-item-link,
  .list-item {
    padding: 1rem;
  }
  .instances-block div:nth-child(2) {
    margin-bottom: 0;
    margin-top: 0;
  }
  .instance-item {
    width: 100%;
    border-bottom: 0.1rem solid var(--grey);
    padding: 0 0 1rem;
    margin: 0 0 1rem;
  }
  .image-chevron {
    display: none;
  }
  .desktop {
    display: none;
  }
  .header-right .instance-item {
    margin-bottom: 0;
    margin-right: 0;
    margin-left: 2rem;
    padding-bottom: 0;
  }
  .lang-block {
    top: 4rem;
    left: -2rem;
  }
}
</style>
