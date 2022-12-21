import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import fr from './locales/fr.json'

import './assets/main.css'

const i18n = createI18n({
  locale: 'fr',
  legacy: false,
  messages: {
    fr
  }
})
const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
