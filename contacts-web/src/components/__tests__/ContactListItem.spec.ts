import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactListItem from '@/components/ContactListItem.vue'
import { createTestingPinia } from '@pinia/testing'
import { useContactsStore } from '@/stores/contacts'

const pinia = createTestingPinia({ createSpy: vi.fn })

describe('ContactListItem', () => {
  it('renders correctly', () => {
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 'random-id',
          name: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        }
      },
      global: {
        plugins: [pinia]
      }
    })

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('.contact-list-item').exists()).toBe(true)
    expect(wrapper.find('.contact-phone').text()).toBe('123-456-7890')
    expect(wrapper.find('.contact-email').text()).toBe('john.doe@example.com')
  })

  it('emits changeSelected event on checkbox change', async () => {
    const store = useContactsStore()
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 'random-id',
          name: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        }
      },
      global: {
        plugins: [pinia]
      }
    })

    // Simulate a checkbox change
    const checkbox = await wrapper.find('.person-checkbox')
    checkbox.element.checked = true
    checkbox.trigger('change')

    // Check if the event was emitted with the correct value
    expect(store.add).toHaveBeenCalledWith('random-id')
  })

  it('redirects to the correct route on item click', async () => {
    const wrapper = mount(ContactListItem, {
      props: {
        item: {
          id: 'random-id',
          name: 'John Doe',
          phone: '123-456-7890',
          email: 'john.doe@example.com'
        }
      },
      global: {
        plugins: [pinia],
        mocks: {
          $router: {
            push: vi.fn()
          }
        }
      }
    })

    await wrapper.find('.contact-list-item').trigger('click')
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/contact/random-id')
  })
})
