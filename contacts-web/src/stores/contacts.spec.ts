import { createPinia } from 'pinia'
import { useContactsStore } from '@/stores/contacts'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ContactsStore', () => {
  let pinia: any
  let store: any

  beforeEach(() => {
    pinia = createPinia()
    store = useContactsStore(pinia)
  })

  it('adds contact ID to the picking array', () => {
    store.add('1')
    expect(store.picking).toContain('1')

    store.add('1')
    expect(store.picking).toHaveLength(1)
  })

  it('selects all IDs', () => {
    store.setIds(['1', '2', '3'])

    store.selectAll()
    expect(store.picking).toEqual(['1', '2', '3'])
  })

  it('clears the selection', () => {
    store.picking = ['1', '2', '3']

    store.clearSelection()
    expect(store.picking).toHaveLength(0)
  })

  it('removes contact ID from the picking array', () => {
    store.picking = ['1', '2', '3']

    store.remove('2')
    expect(store.picking).toEqual(['1', '3'])

    store.remove('4')
    expect(store.picking).toEqual(['1', '3'])
  })
})
