import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from './index.vue'

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

  it('renders icon when name is not provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 100,
        name: undefined
      }
    })

    const icon = wrapper.find('v-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.attributes('icon')).toBe('mdi-account')
  })

  it('not renders initials when name is provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 100,
        name: 'Jhon Doe'
      }
    })

    const icon = wrapper.find('v-icon')
    expect(icon.exists()).toBe(false)
  })
})
