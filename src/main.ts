import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import VueMatomo from 'vue-matomo'
import App from './App.vue'
import router from './router'
import fr from './locales/fr.json'
import en from './locales/en.json'
import 'geovisio/build/index.css'
import './assets/main.css'

declare global {
  interface Window {
    _paq: any[]
  }
}
const matomoHost = import.meta.env.VITE_MATOMO_HOST
const matomoSiteId = import.meta.env.VITE_MATOMO_SITE_ID
const matomoExist = matomoHost && matomoSiteId

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'fr',
  warnHtmlMessage: false,
  globalInjection: true,
  legacy: false,
  messages: {
    fr,
    en
  }
})
const app = createApp(App)
app.use(i18n)
app.use(router)
if (matomoExist) {
  app.use(VueMatomo, {
    host: matomoHost,
    siteId: matomoExist
  })
}
app.mount('#app')
if (matomoExist) {
  window._paq.push(['trackPageView']) // Pour suivre les visites sur vos pages
}
