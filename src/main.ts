import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import wordings from './wordings.json'

import './assets/main.css'

const messages = wordings

const i18n = createI18n({
  locale: 'fr',
  legacy: false,
  messages
})
const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
