import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Link from '../Link.vue'

describe('Link', () => {
  describe('Props', () => {
    it('Should renders properly', () => {
      const wrapper = mount(Link, {
        props: {
          text: 'Link text',
          url: 'Url',
          look: 'blue',
          type: ''
        }
      })
      expect(wrapper.text()).toContain('Link text')
      expect(wrapper.classes()).toContain('blue')
      expect(wrapper.find('router-link').attributes().to).toEqual('Url')
    })
    it('Should change the look with a class', () => {
      const wrapper = mount(Link, {
        props: {
          look: 'yellow'
        }
      })
      expect(wrapper.classes()).toContain('yellow')
    })
    it('Should change the button to an external link', () => {
      const wrapper = mount(Link, {
        props: {
          type: 'external',
          url: 'Url'
        }
      })
      expect(wrapper.find('a').attributes().href).toEqual('Url')
    })
  })
})
