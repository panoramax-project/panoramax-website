import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Footer from '../Footer.vue'
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

describe('Footer', () => {
  describe('Template', () => {
    it('Should render the component with all the wordings', () => {
      const wrapper = shallowMount(Footer, {
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
      expect(wrapper.html()).contains('general.footer.faq_subtitle')
      expect(wrapper.html()).contains('/foire-aux-questions')

      expect(wrapper.html()).contains('general.footer.photos_subtitle')
      expect(wrapper.html()).contains('/photos')

      expect(wrapper.html()).contains('general.footer.ign_subtitle')
      expect(wrapper.html()).contains('https://panoramax.ign.fr/')

      expect(wrapper.html()).contains('general.footer.osm_subtitle')
      expect(wrapper.html()).contains('https://panoramax.openstreetmap.fr/')

      expect(wrapper.html()).contains('general.footer.resources_title')
      expect(wrapper.html()).contains('general.footer.forum_subtitle')
      expect(wrapper.html()).contains(
        'https://forum.geocommuns.fr/c/panoramax/6'
      )

      expect(wrapper.html()).contains('general.footer.agenda_subtitle')
      expect(wrapper.html()).contains(
        'https://cryptpad.fr/calendar/#/2/calendar/view/WKKDBDTk8kWe5-lm+Z9jLksbn9hkKDRE2dVNj4AKEZk/'
      )

      expect(wrapper.html()).contains('general.footer.github_subtitle')
      expect(wrapper.html()).contains(
        'https://github.com/panoramax-project/panoramax-website'
      )

      expect(wrapper.html()).contains('general.footer.follow_title')
      expect(wrapper.html()).contains('/assets/images/x-logo.svg')
      expect(wrapper.html()).contains('https://twitter.com/panoramax_')

      expect(wrapper.html()).contains('/assets/images/mastodon-logo.svg')
      expect(wrapper.html()).contains('https://mapstodon.space/@panoramax')

      expect(wrapper.html()).contains('/assets/images/linkedin-logo.svg')
      expect(wrapper.html()).contains(
        'https://www.linkedin.com/groups/12741355/'
      )

      expect(wrapper.html()).contains('general.footer.credits_title')
      expect(wrapper.html()).contains('https://www.flaticon.com/fr/')

      expect(wrapper.html()).contains('general.footer.ay11')
      expect(wrapper.html()).contains('/accessibilite')
    })
  })
})
