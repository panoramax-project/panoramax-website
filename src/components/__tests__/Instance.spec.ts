import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Instance from '../Instance.vue'
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

describe('Instance', () => {
  describe('Template', () => {
    it('Should render the component with all the goods wordings', () => {
      const wrapper = shallowMount(Instance, {
        props: {
          url: 'my-url/',
          image: { alt: 'my alt', url: 'my-image-url' }
        },
        global: {
          plugins: [i18n],
          mocks: {
            $t: (msg: string) => msg
          }
        }
      })
      expect(wrapper.html()).contains('/my-image-url')
      expect(wrapper.html()).contains('text="pages.home.instance_explore"')
      expect(wrapper.html()).contains('url="my-url/"')

      expect(wrapper.html()).contains('text="pages.home.instance_contribute"')
      expect(wrapper.html()).contains('url="my-url/pourquoi-contribuer"')
    })
  })
})
