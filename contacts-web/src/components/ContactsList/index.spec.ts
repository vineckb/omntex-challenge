import { expect, describe, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from './index.vue'
import { createTestingPinia } from '@pinia/testing'
import AppContactsListHeading from '@/components/ContactsListHeading.vue'
import AppContctsListItem from '@/components/ContactListItem/index.vue'

const pinia = createTestingPinia({ createSpy: vi.fn })

describe('SeuComponente', () => {
  it('renderiza corretamente com uma lista de items', () => {
    const items = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' }
    ]

    const wrapper = mount(Component, {
      propsData: {
        items
      },
      global: {
        plugins: [pinia],
        components: { AppContactsListHeading, AppContctsListItem }
      }
    })

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.findComponent(AppContactsListHeading).exists()).toBe(true)

    const contactList = wrapper.find('.persons-list')
    expect(contactList.exists()).toBe(true)

    const contactListItems = contactList.findAllComponents(AppContctsListItem)

    contactListItems.forEach((listItem: any, index: number) => {
      expect(listItem.exists()).toBe(true)
      expect(listItem.props('item')).toEqual(items[index])
    })
  })
})
