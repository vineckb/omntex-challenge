<template>
  <app-contacts-list-heading
    :picking="picking"
    :selectAll="selectAll"
    :clearSelection="clearSelection"
    :allSelected="items?.length === picking.length"
  />

  <v-list
    v-if="items && items.length"
    :class="'persons-list' + (!!picking.length ? ' picking' : '')"
  >
    <contact-list-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :selected="!!picking.find((id) => item.id === id)"
      @changeSelected="(v) => handleChangeSelected(item)(v)"
    />
  </v-list>
</template>

<script setup lang="ts">
import type { ContactType } from '@/models'
import ContactListItem from './ContactListItem.vue'
import AppContactsListHeading from '@/components/ContactsListHeading.vue'
import { ref } from 'vue'

interface Props {
  items?: ContactType[]
}

const { items } = defineProps<Props>()
const picking = ref<number[]>([])

function handleChangeSelected(item: ContactType) {
  return (selected: boolean) => {
    if (selected) {
      if (picking.value.find((id) => id == item.id)) return

      picking.value.push(item.id)
    } else {
      const index = picking.value.findIndex((id) => item.id == id)

      if (index < 0) return

      picking.value.splice(index, 1)
    }
  }
}

function selectAll() {
  picking.value = items?.map((item) => item.id) || []
}

function clearSelection() {
  picking.value = []
}
</script>

<style>
.persons-list {
  .person-checkbox {
    display: none;
  }

  &.picking {
    .person-checkbox {
      display: grid !important;
    }

    .person-avatar {
      display: none !important;
    }
  }
}
</style>
