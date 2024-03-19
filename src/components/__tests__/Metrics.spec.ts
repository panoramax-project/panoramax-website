import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Metrics from '../Metrics.vue'
import fr from '../../locales/fr.json'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  globalInjection: true,
  legacy: false,
  messages: {
    fr
  }
})

describe('Metrics', () => {
  describe('Template', () => {
    it('Should render the component with all the goods wordings', () => {
      const wrapper = shallowMount(Metrics, {
        props: {
          number: '0',
          text: 'my text',
          description: 'my description'
        },
        global: {
          plugins: [i18n],
          mocks: {
            $t: (msg: string) => msg
          }
        }
      })
      expect(wrapper.html()).contains('0')
      expect(wrapper.html()).contains('my text')
      expect(wrapper.html()).contains('my description')
    })
  })
})
