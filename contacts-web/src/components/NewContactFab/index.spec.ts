import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NewContactFab from './index.vue'

describe('NewContactFab', () => {
  it('Renders the button correctly and navigates to "/new" when clicked.', async () => {
    const wrapper = mount(NewContactFab, {
      global: {
        mocks: {
          $router: {
            push: vi.fn()
          }
        }
      }
    })

    expect(wrapper.find('.fab').exists()).toBe(true)

    await wrapper.find('.fab').trigger('click')
  })
})
