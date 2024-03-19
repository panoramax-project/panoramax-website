import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import ExpandableBlock from '../ExpandableBlock.vue'
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

describe('ExpandableBlock', () => {
  describe('Template', () => {
    it('Should render the component with all the goods wordings', () => {
      const wrapper = shallowMount(ExpandableBlock, {
        props: {
          title: 'my title',
          text: 'my text'
        },
        global: {
          plugins: [i18n],
          mocks: {
            $t: (msg: string) => msg
          }
        }
      })
      expect(wrapper.html()).contains('my title')
      expect(wrapper.html()).contains('my text')
      expect(wrapper.html()).contains('/assets/images/chevron.svg')
    })
    describe('When the component is clicked', () => {
      it('Should add the is-open class', async () => {
        const wrapper = shallowMount(ExpandableBlock, {
          props: {
            title: 'my title',
            text: 'my text'
          },
          global: {
            plugins: [i18n],
            mocks: {
              $t: (msg: string) => msg
            }
          }
        })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.html()).contains('class="entry-expandable is-open"')
      })
    })
  })
})
