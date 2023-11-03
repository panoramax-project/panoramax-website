import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import fr from './locales/fr.json'
import en from './locales/en.json'
import 'geovisio/build/index.css'

import './assets/main.css'

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

app.mount('#app')
