import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactListItem from '@/components/ContactListItem.vue'

describe('ContactListItem', () => {
  it('renders correctly', () => {
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 1,
          title: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        },
        selected: false
      }
    })

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('.contact-list-item').exists()).toBe(true)
    expect(wrapper.find('.contact-phone').text()).toBe('123-456-7890')
    expect(wrapper.find('.contact-email').text()).toBe('john.doe@example.com')
  })

  it('emits changeSelected event on checkbox change', async () => {
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 1,
          title: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        },
        selected: false
      }
    })

    // Simulate a checkbox change
    const checkbox = await wrapper.find('.person-checkbox')
    checkbox.element.checked = true
    checkbox.trigger('change')

    // Check if the event was emitted with the correct value
    expect(wrapper.emitted().changeSelected).toBeTruthy()
    expect(wrapper.emitted().changeSelected[0]).toEqual([true])
  })

  it('redirects to the correct route on item click', async () => {
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 1,
          title: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        },
        selected: false
      },
      global: {
        mocks: {
          $router: {
            push: vi.fn()
          }
        }
      }
    })

    await wrapper.find('.contact-list-item').trigger('click')
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/contact/1')
  })
})
