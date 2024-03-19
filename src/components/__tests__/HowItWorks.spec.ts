import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HowItWorks from '../HowItWorks.vue'

describe('HowItWorks', () => {
  it('renders properly', () => {
    const wrapper = mount(HowItWorks, {
      props: {
        title: 'My title',
        description: ['My description 1', 'My description 2'],
        image: { url: 'imageUrl', alt: 'imageAlt' }
      }
    })
    expect(wrapper.text()).toContain('My title')
    expect(wrapper.text()).toContain('My description 1')
    expect(wrapper.text()).toContain('My description 2')
  })
})
