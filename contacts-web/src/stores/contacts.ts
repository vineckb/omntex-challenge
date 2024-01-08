import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    picking: [] as string[],
    ids: [] as string[]
  }),

  actions: {
    setIds(ids: string[]) {
      this.ids = ids
    },

    add(id: string) {
      if (this.picking.find((i) => i == id)) return
      this.picking.push(id)
    },

    selectAll() {
      this.picking = [...this.ids]
    },

    clearSelection() {
      this.picking.splice(0, this.picking.length)
    },

    remove(id: string) {
      const index = this.picking.findIndex((i) => id == i)

      if (index < 0) return

      this.picking.splice(index, 1)
    }
  }
})
