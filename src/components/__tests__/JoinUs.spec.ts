import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JoinUs from '../JoinUs.vue'

describe('JoinUs', () => {
  it('renders properly', () => {
    const wrapper = mount(JoinUs, { props: { title: 'My title' } })
    expect(wrapper.text()).toContain('My title')
  })
})
