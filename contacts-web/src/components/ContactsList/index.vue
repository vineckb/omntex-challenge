<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <app-contacts-list-heading
    :picking="picking"
    :ids="items?.map((item) => item.id)"
  />

  <v-list
    v-if="items && items.length"
    :class="'persons-list' + (!!picking.length ? ' picking' : '')"
  >
    <contact-list-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </v-list>
</template>

<script setup lang="ts">
import type { ContactType } from '@/models'
import ContactListItem from '@/components/ContactListItem/index.vue'
import AppContactsListHeading from '@/components/ContactsListHeading.vue'
import { useContactsStore } from '@/stores/contacts'

interface Props {
  items?: ContactType[]
}

const { items } = defineProps<Props>()
const { picking, setIds } = useContactsStore()
setIds(items?.map((i) => i.id) || [])
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
