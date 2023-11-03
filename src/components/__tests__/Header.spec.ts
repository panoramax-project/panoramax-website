import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Header from '../Header.vue'
import Link from '@/components/Link.vue'
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

describe('Header', () => {
  describe('Template', () => {
    it('Should render the component with all the goods wordings', () => {
      const wrapper = shallowMount(Header, {
        global: {
          plugins: [i18n],
          mocks: {
            $t: (msg: string) => msg
          },
          stubs: {
            Link
          }
        }
      })
      expect(wrapper.html()).contains('general.panoramax_title')
      expect(wrapper.html()).contains('to="/"')
      expect(wrapper.html()).contains('/assets/images/logo.jpg')

      expect(wrapper.html()).contains('general.nav.panoramax_instance')
      expect(wrapper.html()).contains('/assets/images/chevron.svg')

      expect(wrapper.html()).contains('general.nav.instance_ign')
      expect(wrapper.html()).contains('https://panoramax.ign.fr/')

      expect(wrapper.html()).contains('general.nav.instance_osm')
      expect(wrapper.html()).contains('https://panoramax.openstreetmap.fr/')

      expect(wrapper.html()).contains('general.nav.faq')
      expect(wrapper.html()).contains('foire-aux-questions')

      expect(wrapper.html()).contains('general.nav.faq')
      expect(wrapper.html()).contains('foire-aux-questions')

      expect(wrapper.html()).contains('general.nav.contact')
      expect(wrapper.html()).contains('mailto:panoramax@panoramax.fr')
    })
    describe('In responsive when the burger button is clicked', () => {
      it('Should remove the class who display the header', async () => {
        const wrapper = shallowMount(Header, {
          global: {
            plugins: [i18n],
            mocks: {
              $t: (msg: string) => msg
            },
            stubs: {
              Link
            }
          }
        })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.html()).contains('class="header-list"')
      })
    })
    describe('In responsive when the burger button is clicked two times', () => {
      it('Should add the class who display the header', async () => {
        const wrapper = shallowMount(Header, {
          global: {
            plugins: [i18n],
            mocks: {
              $t: (msg: string) => msg
            },
            stubs: {
              Link
            }
          }
        })
        const button = wrapper.find('button')
        await button.trigger('click')
        await button.trigger('click')
        expect(wrapper.html()).contains('class="header-list displayed"')
      })
    })
  })
})
