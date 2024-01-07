import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '@/components/Avatar.vue'

describe('Avatar', () => {
  it('renders initials based on the provided name', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 100,
        name: 'John Doe'
      }
    })

    expect(wrapper.text()).toBe('JD')
  })

  it('renders initials with proper casing', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 100,
        name: 'john doe'
      }
    })

    expect(wrapper.text()).toBe('JD')
  })

  it('renders initials with the correct font size', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 150,
        name: 'John Doe'
      }
    })

    const span = wrapper.find('span')
    const expectedFontSize = '50px'

    expect(span.element.style.fontSize).toBe(expectedFontSize)
  })
})
